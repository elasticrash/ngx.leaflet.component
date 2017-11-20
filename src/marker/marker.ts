import { Component, Input, Optional, ElementRef, ViewChild } from '@angular/core';
import { Http, Response, Headers, RequestOptions, Request, RequestMethod, ResponseContentType } from '@angular/http';
import { MapService } from '../services/map.service';
import { GroupService } from '../services/group.service';
import { PopupService } from '../services/popup.service';
import { LeafletElement } from '../map/map';
import { LeafletGroup } from '../group/group';
import { CoordinateHandler } from '../helpers/coordinateHandler';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import * as L from 'leaflet';

@Component({
  selector: 'marker-element',
  template: `<div #ngel> <ng-content></ng-content></div>`,
  styles: [''],
  providers: [PopupService]
})

export class MarkerElement extends CoordinateHandler {
  @Input() lat: number = 52.6;
  @Input() lon: number = -1.1;
  @Input() mouseover: string | undefined = undefined;
  @Input() onclick: string | undefined = undefined;
  @Input() iconUrl: string = "";
  @ViewChild('ngel') ngEl: ElementRef;  
  public marker: any = null;

  constructor(
    private mapService: MapService,
    private groupService: GroupService,
    private popupService: PopupService,
    private http: Http,
    @Optional() private LeafletElement?: LeafletElement,
    @Optional() private LeafletGroup?: LeafletGroup) {
    super();
  }

  ngOnInit() {
    super.assignCartesianPointToLeafletsLatLngSchema();
    var model = this;
    if (this.LeafletElement || this.LeafletGroup) {

      let map = this.mapService.getMap();

      super.transformPointCoordinates(this.LeafletElement.crs);

      if (this.iconUrl === "") {
        this.marker = L.marker([this.lat, this.lon]);
        this.createMarkerlayer(this.marker, map);
      } else {
        this.imageExists(this.iconUrl, function (exists) {

          model.getImage().subscribe(
            image => {
              var img = document.createElement("img");
              window.URL.createObjectURL(image.blob());
              var reader = new FileReader();
              reader.onload = function () {
                img.src = reader.result;
                var myIcon = L.icon({
                  iconUrl: model.iconUrl,
                  iconSize: [img.width, img.height],
                  iconAnchor: [img.width / 2, img.height - 1],
                  popupAnchor: [0, -img.height]
                });

                var obj = { icon: myIcon, options: null };
                model.marker = L.marker([model.lat, model.lon], obj);
                model.createMarkerlayer(model.marker, map);
              }
              reader.readAsDataURL(image.blob());
            },
            err => {
              console.log(err);
            });
        });
      }
    } else {
      console.warn("This marker-element will not be rendered \n the expected parent node of marker-element should be either leaf-element or leaflet-group");
    }
  }

  createMarkerlayer(marker, map) {
    var textInput = undefined;
    if (this.ngEl.nativeElement.childNodes.length > 0) {
      var textNode = this.ngEl.nativeElement.childNodes[0];
      textInput = textNode.nodeValue;
    }

    //add popup methods on element only if any of the tests are not undefined
    if (this.mouseover !== undefined || this.onclick !== undefined || textInput !== undefined) {
      this.popupService.enablePopup(this.mouseover, this.onclick, this.marker, textInput);
    }

    //only if the parent is map should the marker-element should be directly added to the map
    if (this.LeafletGroup) {
      this.groupService.addOLayersToGroup(marker, map, this.mapService, this.LeafletGroup);
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

  getImage(): any {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({
      responseType: ResponseContentType.Blob,
      headers: headers
    });


    return this.http.get(this.iconUrl, options)
    .map((res: Response) => res)
    .catch((error: any) => Observable.throw('Server error'));
  }
}
