import { Component, Input, Optional, ElementRef, ViewChild } from '@angular/core';
import { LeafletElement } from '../map/map';
import { LeafletGroup } from '../group/group';
import { MapService } from '../services/map.service';
import { GroupService } from '../services/group.service';
import { PopupService } from '../services/popup.service';
import { GuidService } from '../services/globalId.service';
import { HelperService } from '../services/helper.service';
import { CoordinateHandler } from '../helpers/coordinateHandler';
import { path } from '../models/path';
import * as L from 'leaflet';


@Component({
  selector: 'polygon-element',
  template: `<div #ngel> <ng-content></ng-content></div>`,
  styles: ['']
})

export class PolygonElement extends CoordinateHandler {
  @Input() latlngs: any = [[[52.65, -1.2], [52.645, -1.15], [52.696, -1.155], [52.697, -1.189]],
  [[52.66, -1.19], [52.665, -1.16], [52.686, -1.161], [52.687, -1.179]]];
  @Input() Options: path = new path(null);
  @Input() mouseover: string | undefined = undefined;
  @Input() onclick: string | undefined = undefined;
  @ViewChild('ngel') ngEl: ElementRef;  
  public polygon: any = null;
  public originalObject: any = [...this.latlngs];
  public globalId: string = this.guidService.newGuid();

  constructor(
    private mapService: MapService,
    private groupService: GroupService,
    private popupService: PopupService,
    private guidService: GuidService,
    private helperService: HelperService,
    @Optional() private LeafletElement?: LeafletElement,
    @Optional() private LeafletGroup?: LeafletGroup) {
    super();
  }

  ngOnInit() {
    super.assignCartesianArrayToLeafletsLatLngSchema();
    //check if any of the two optional injections exist
    if (this.LeafletElement || this.LeafletGroup) {
      let inheritedOptions: any = new path(this.Options);
      let map = this.mapService.getMap();

      super.transformArrayCoordinates(this.LeafletElement.crs);

      this.polygon = L.polygon([this.latlngs], inheritedOptions);

      if (this.LeafletGroup) {
        this.groupService.addOLayersToGroup(this.polygon, map, this.mapService, this.LeafletGroup, false, this.globalId);
      } else {
        this.polygon.addTo(map);
      }
    } else {
      console.warn("This polygon-element will not be rendered \n the expected parent node of polygon-element should be either leaf-element or leaflet-group");
    }
  }

  ngAfterViewInit() {
    var textInput = undefined;
    if (this.ngEl.nativeElement.childNodes.length > 0) {
      var textNode = this.ngEl.nativeElement.childNodes[0];
      textInput = textNode.nodeValue;
    }

    //add popup methods on element only if any of the tests are not undefined
    if (this.mouseover !== undefined || this.onclick !== undefined || textInput !== undefined) {
      this.popupService.enablePopup(this.mouseover, this.onclick, this.polygon, textInput);
    }
  }

  ngDoCheck() {
    let map = this.mapService.getMap();

    var same: Boolean = this.helperService.arrayCompare(this.originalObject, this.latlngs);

    if (!same) {
      this.originalObject = [...this.latlngs];
      //if the layer is part of a group
      let inheritedOptions: any = new path(this.Options);

      if (this.LeafletGroup) {
        this.polygon = L.polygon([this.latlngs], inheritedOptions);
        this.groupService.addOLayersToGroup(this.polygon, map, this.mapService, this.LeafletGroup, true, this.globalId);
      } else {
        map.removeLayer(this.polygon);
        this.polygon = L.polygon([this.latlngs], inheritedOptions);
        this.polygon.addTo(map);
      }
    }
  }
}
