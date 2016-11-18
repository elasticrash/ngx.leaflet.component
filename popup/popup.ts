import { Component, Input, Injector, Optional } from '@angular/core';
import { LeafletElement } from '../map/map';
import { LeafletGroup } from '../group/group';
import { MapService } from '../services/map.service';
import { GroupService } from '../services/group.service';
import { path } from '../models/path';
import { Ipath } from '../interfaces/path';

var Lealflet = require('leaflet');

declare var L: any;

@Component({
  moduleId: module.id,
  selector: 'popup-element',
  templateUrl: 'popup.html',
  styleUrls: ['popup.css']
})

export class PopupElement {
    @Input() lat: number = 52.6;
    @Input() lon: number = -1.9;
    @Input() content: string = "nice popup";
    @Input() Options: Ipath = new path(null);    

  constructor(
    private mapService: MapService,
    private groupService: GroupService,    
    @Optional() private LeafletElement?: LeafletElement,
    @Optional() private LeafletGroup?: LeafletGroup) {
  }

  ngOnInit() {
    //check if any of the two optional injections exist
    if (this.LeafletElement || this.LeafletGroup) {
      let inheritedOptions = new path(this.Options);
      
      let map = this.mapService.getMap();
      let popup = L.popup(inheritedOptions).setLatLng([this.lat, this.lon]).setContent(this.content);     

      if (this.LeafletGroup) {
        this.groupService.addOLayersToGroup(popup);
        this.groupService.increaseNumber();
      } else {
        popup.addTo(map);
      }
    } else {
      console.warn("This popup-element will not be rendered \n the expected parent node of popup-element should be either leaf-element or leaflet-group");
    }
  }
}