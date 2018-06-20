import { Component, Input, Optional, ElementRef, ViewChild, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MapService } from '../services/map.service';
import { GroupService } from '../services/group.service';
import { PopupService } from '../services/popup.service';
import { LeafletElement } from '../map/map';
import { LeafletGroup } from '../group/group';
import { CoordinateHandler } from '../helpers/coordinateHandler';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as L from 'leaflet';

@Component({
  selector: 'marker-element',
  template: `<div #ngel><ng-content></ng-content></div>`,
  styles: [''],
  providers: [PopupService]
})

export class MarkerElement extends CoordinateHandler implements OnInit {
  @Input() public lat: number = 52.6;
  @Input() public lon: number = -1.1;
  @Input() public mouseover: string | undefined = undefined;
  @Input() public onclick: string | undefined = undefined;
  @Input() public iconUrl: string = "";
  @ViewChild('ngel') public ngEl: ElementRef;
  public marker: any = null;

  constructor(
    private mapService: MapService,
    private popupService: PopupService,
    private http: HttpClient,
    @Optional() private groupService?: GroupService,
    @Optional() private leafletElement?: LeafletElement,
    @Optional() private leafletGroup?: LeafletGroup) {
    super();
  }

  public ngOnInit() {
    super.assignCartesianPointToLeafletsLatLngSchema();
    const model = this;
    if (this.leafletElement || this.leafletGroup) {

      const mapObject = this.mapService.getMap();

      super.transformPointCoordinates(this.leafletElement.crs);

      if (this.iconUrl === "") {
        this.marker = L.marker([this.lat, this.lon]);
        this.createMarkerlayer(this.marker, mapObject);
      } else {
        this.imageExists(this.iconUrl, (exists) => {

          model.getImage().subscribe(
            (image) => {
              const img = document.createElement("img");
              window.URL.createObjectURL(image.blob());
              const reader = new FileReader();
              reader.onload = () => {
                img.src = reader.result;
                const myIcon = L.icon({
                  iconUrl: model.iconUrl,
                  iconSize: [img.width, img.height],
                  iconAnchor: [img.width / 2, img.height - 1],
                  popupAnchor: [0, -img.height]
                });

                const obj = { icon: myIcon, options: null };
                model.marker = L.marker([model.lat, model.lon], obj);
                model.createMarkerlayer(model.marker, mapObject);
              };
              reader.readAsDataURL(image.blob());
            }, (err) => {
              // tslint:disable-next-line:no-console
              console.log(err);
            });
        });
      }
    } else {
      // tslint:disable-next-line:no-console
      console.warn(`This marker-element will not be rendered
      the expected parent node of marker-element should be either leaf-element or leaflet-group`);
    }
  }

  public createMarkerlayer(marker, mapObject) {
    let textInput;
    if (this.ngEl.nativeElement.childNodes.length > 0) {
      const textNode = this.ngEl.nativeElement.childNodes[0];
      textInput = textNode.nodeValue;
    }

    // add popup methods on element only if any of the tests are not undefined
    if (this.mouseover !== undefined || this.onclick !== undefined || textInput !== undefined) {
      this.popupService.enablePopup(this.mouseover, this.onclick, this.marker, textInput);
    }

    // only if the parent is map should the marker-element should be directly added to the map
    if (this.leafletGroup) {
      this.groupService.addOLayersToGroup(marker, mapObject, this.mapService, this.leafletGroup);
    } else {
      marker.addTo(mapObject);
    }
  }

  public imageExists(url, callback) {
    const img = new Image();
    img.onload = () => { callback(true); };
    img.onerror = () => { callback(false); };
    img.src = url;
  }

  public getImage(): any {
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.get(this.iconUrl, {
      headers,
      responseType: "blob"
    }).pipe(map((res: Response) => res)).toPromise()
      .catch((error: any) => Observable.throw('Server error'));
  }
}
