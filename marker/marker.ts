import { Component, Input, Injector, Optional } from '@angular/core';
import { MapService } from '../services/map.service';
import { GroupService } from '../services/group.service';
import { PopupService } from '../services/popup.service';
import { LeafletElement } from '../map/map';
import { LeafletGroup } from '../group/group';

var Lealflet = require('leaflet');

declare var L: any;

@Component({
  moduleId: module.id,
  selector: 'marker-element',
  templateUrl: 'marker.html',
  styleUrls: ['marker.css'],
  providers: [PopupService]
})

export class MarkerElement {
  @Input() lat: number = 52.6;
  @Input() lon: number = -1.1;
  @Input() mouseover: string = "";
  @Input() onclick: string = "";
  @Input() iconUrl: string = "";

  constructor(
    private mapService: MapService,
    private groupService: GroupService,
    private popupService: PopupService,
    @Optional() private LeafletElement?: LeafletElement,
    @Optional() private LeafletGroup?: LeafletGroup) {
  }

  ngOnInit() {
    var model = this;
    if (this.LeafletElement || this.LeafletGroup) {

      let map = this.mapService.getMap();


      var marker = null;
      if (this.iconUrl === "") {
        marker = L.marker([this.lat, this.lon]);
        this.createMarkerlayer(marker, map);
      } else {
        this.imageExists(this.iconUrl, function (exists) {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', model.iconUrl, true);
          xhr.responseType = 'blob';
          xhr.onload = function (e) {
            if (this.status == 200) {
              var myBlob = this.response;
              var img = document.createElement("img");
              img.src = window.URL.createObjectURL(myBlob);
              var reader = new FileReader();

              reader.onload = function () {
                img.src = reader.result;
                img.onload = function () {
                  var myIcon = L.icon({
                    iconUrl: model.iconUrl,
                    iconSize: [img.height, img.height],
                    iconAnchor: [img.height/2, img.height-1],
                    popupAnchor: [0, -img.height]
                  });
                  marker = L.marker([model.lat, model.lon], {icon: myIcon});
                  model.createMarkerlayer(marker, map);
                };
              }
              reader.readAsDataURL(myBlob);
            }
          };
          xhr.send();
        });
      }
    } else {
      console.warn("This marker-element will not be rendered \n the expected parent node of marker-element should be either leaf-element or leaflet-group");
    }
  }

  createMarkerlayer(marker, map) {
    //add popup methods on element
    this.popupService.enablePopup(this.mouseover, this.onclick, marker);

    //only if the parent is map should the marker-element should be directly added to the map
    if (this.LeafletGroup) {
      this.groupService.addOLayersToGroup(marker);
    } else {
      marker.addTo(map);
    }
  }

  imageExists(url, callback) {
    var img = new Image();
    img.onload = function () { callback(true); };
    img.onerror = function () { callback(false); };
    img.src = url;
  }
}