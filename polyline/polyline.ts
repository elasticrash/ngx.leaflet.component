import { Component, Input, Injector, Optional } from '@angular/core';
import { LeafletElement } from '../map/map';
import { LeafletGroup } from '../group/group';
import { MapService } from '../services/map.service';
import { GroupService } from '../services/group.service';
import { PopupService } from '../services/popup.service';
import { GuidService } from '../services/globalId.service';
import { HelperService } from '../services/helper.service';
import { path } from '../models/path';
import { Ipath } from '../interfaces/path';

var Lealflet = require('leaflet');

declare var L: any;

@Component({
  // moduleId: module.id,
  selector: 'polyline-element',
  templateUrl: 'polyline.html',
  styleUrls: ['polyline.css']
})

export class PolylineElement {
  @Input() latlngs: Array<Array<number>> = [[52.6, -1.1], [52.605, -1.1], [52.606, -1.105], [52.697, -1.109]];
  @Input() Options: Ipath = new path(null);
  @Input() mouseover: string = "";
  @Input() onclick: string = "";
  polyline: any = null;
  originalObject: Array<Array<number>> = [...this.latlngs];
  globalId: string = this.guidService.newGuid();

  constructor(
    private mapService: MapService,
    private groupService: GroupService,
    private popupService: PopupService,
    private guidService: GuidService,
    private helperService: HelperService,
    @Optional() private LeafletElement?: LeafletElement,
    @Optional() private LeafletGroup?: LeafletGroup) {
  }

  ngOnInit() {
    //check if any of the two optional injections exist
    if (this.LeafletElement || this.LeafletGroup) {
      //polyline shouldn't have a fill
      this.Options.fill = false;
      let inheritedOptions = new path(this.Options);
      let map = this.mapService.getMap();
      this.polyline = L.polyline(this.latlngs, inheritedOptions);

      //add popup methods on element
      this.popupService.enablePopup(this.mouseover, this.onclick, this.polyline);

      if (this.LeafletGroup) {
        this.groupService.addOLayersToGroup(this.polyline, map, this.mapService, this.LeafletGroup, false, this.globalId);
      } else {
        this.polyline.addTo(map);
      }
    } else {
      console.warn("This polyline-element will not be rendered \n the expected parent node of polyline-element should be either leaf-element or leaflet-group");
    }
  }

  ngDoCheck() {
    let map = this.mapService.getMap();

    var same: Boolean = this.helperService.arrayCompare(this.originalObject, this.latlngs);

    if (!same) {
      this.originalObject = [...this.latlngs];
      //if the layer is part of a group
      this.Options.fill = false;
      let inheritedOptions = new path(this.Options);

      if (this.LeafletGroup) {
        this.polyline = L.polyline(this.latlngs, inheritedOptions);
        this.groupService.addOLayersToGroup(this.polyline, map, this.mapService, this.LeafletGroup, true, this.globalId);
      } else {
        map.removeLayer(this.polyline);
        this.polyline = L.polyline(this.latlngs, inheritedOptions);
        this.polyline.addTo(map);
      }
    }
  }
}
