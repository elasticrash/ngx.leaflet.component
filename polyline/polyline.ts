import { Component, Input, Injector, Optional, ChangeDetectionStrategy } from '@angular/core';
import { LeafletElement } from '../map/map';
import { LeafletGroup } from '../group/group';
import { MapService } from '../services/map.service';
import { GroupService } from '../services/group.service';
import { PopupService } from '../services/popup.service';
import { path } from '../models/path';
import { Ipath } from '../interfaces/path';

var Lealflet = require('leaflet');

declare var L: any;

@Component({
  moduleId: module.id,
  selector: 'polyline-element',
  templateUrl: 'polyline.html',
  styleUrls: ['polyline.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class PolylineElement {
  @Input() latlngs: Array<Array<number>> = [[52.6, -1.1], [52.605, -1.1], [52.606, -1.105], [52.697, -1.109]];
  @Input() Options: Ipath = new path(null);
  @Input() mouseover: string = "";
  @Input() onclick: string = "";
  polyline: any = null;
  inheritedOptions: any = null;

  constructor(
    private mapService: MapService,
    private groupService: GroupService,
    private popupService: PopupService,
    @Optional() private LeafletElement?: LeafletElement,
    @Optional() private LeafletGroup?: LeafletGroup) {
  }

  ngOnInit() {
    //check if any of the two optional injections exist
    if (this.LeafletElement || this.LeafletGroup) {
      this.inheritedOptions = new path(this.Options);
      //polyline shouldn't have a fill
      this.inheritedOptions.fill = false;
      let map = this.mapService.getMap();
      this.polyline = L.polyline(this.latlngs, this.inheritedOptions);

      //add popup methods on element
      this.popupService.enablePopup(this.mouseover, this.onclick, this.polyline);

      if (this.LeafletGroup) {
        this.groupService.addOLayersToGroup(this.polyline);
        this.groupService.increaseNumber();
      } else {
        this.polyline.addTo(map);
      }
    } else {
      console.warn("This polyline-element will not be rendered \n the expected parent node of polyline-element should be either leaf-element or leaflet-group");
    }
  }

  ngOnChanges(inputChanges) {
    this.polyline = L.polyline(this.latlngs, this.inheritedOptions);
    console.log(inputChanges);
  }
}