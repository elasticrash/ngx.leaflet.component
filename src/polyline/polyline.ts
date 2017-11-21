import { Component, Input, OnInit, Optional, ElementRef, ViewChild } from '@angular/core';
import { LeafletElement } from '../map/map';
import { LeafletGroup } from '../group/group';
import { MapService } from '../services/map.service';
import { GroupService } from '../services/group.service';
import { PopupService } from '../services/popup.service';
import { GuidService } from '../services/globalId.service';
import { HelperService } from '../services/helper.service';
import { CoordinateHandler } from '../helpers/coordinateHandler';
import { path } from '../models/path';
import { Ipath } from '../interfaces/path';
import * as L from 'leaflet';

@Component({
  selector: 'polyline-element',
  template: `<div #ngel><ng-content></ng-content></div>`,
  styles: ['']
})

export class PolylineElement extends CoordinateHandler implements OnInit {
  @Input() public latlngs: any = [[52.6, -1.1], [52.605, -1.1], [52.606, -1.105], [52.697, -1.109]];
  @Input() public Options: any = new path(null);
  @Input() public mouseover: string | undefined = undefined;
  @Input() public onclick: string | undefined = undefined;
  @ViewChild('ngel') public ngEl: ElementRef;  
  public polyline: any = null;
  public originalObject: any = [...this.latlngs];
  public globalId: string = this.guidService.newGuid();

  constructor(
    private mapService: MapService,
    private popupService: PopupService,
    private guidService: GuidService,
    private helperService: HelperService,
    @Optional() private groupService?: GroupService,        
    @Optional() private leafletElement?: LeafletElement,
    @Optional() private leafletGroup?: LeafletGroup) {
    super();
  }

  ngOnInit() {
    super.assignCartesianArrayToLeafletsLatLngSchema();
    // check if any of the two optional injections exist
    if (this.leafletElement || this.leafletGroup) {
      // polyline shouldn't have a fill
      this.Options.fill = false;
      let inheritedOptions: any = new path(this.Options);
      let map = this.mapService.getMap();

      super.transformArrayCoordinates(this.leafletElement.crs);

      this.polyline = L.polyline(this.latlngs, inheritedOptions);

      if (this.leafletGroup) {
        this.groupService.addOLayersToGroup(this.polyline, map, this.mapService, this.leafletGroup, false, this.globalId);
      } else {
        this.polyline.addTo(map);
      }
    } else {
      console.warn("This polyline-element will not be rendered \n the expected parent node of polyline-element should be either leaf-element or leaflet-group");
    }
  }

  ngAfterViewInit() {
    var textInput = undefined;
    if (this.ngEl.nativeElement.childNodes.length > 0) {
      var textNode = this.ngEl.nativeElement.childNodes[0];
      textInput = textNode.nodeValue;
    }

    // add popup methods on element only if any of the tests are not undefined
    if (this.mouseover !== undefined || this.onclick !== undefined || textInput !== undefined) {
      this.popupService.enablePopup(this.mouseover, this.onclick, this.polyline, textInput);
    }
  }

  ngDoCheck() {
    let map = this.mapService.getMap();

    var same: Boolean = this.helperService.arrayCompare(this.originalObject, this.latlngs);

    if (!same) {
      this.originalObject = [...this.latlngs];
      // if the layer is part of a group
      this.Options.fill = false;
      let inheritedOptions: any = new path(this.Options);

      if (this.leafletGroup) {
        this.polyline = L.polyline(this.latlngs, inheritedOptions);
        this.groupService.addOLayersToGroup(this.polyline, map, this.mapService, this.leafletGroup, true, this.globalId);
      } else {
        map.removeLayer(this.polyline);
        this.polyline = L.polyline(this.latlngs, inheritedOptions);
        this.polyline.addTo(map);
      }
    }
  }
}
