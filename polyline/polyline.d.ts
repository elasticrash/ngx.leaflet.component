import { LeafletElement } from '../map/map';
import { LeafletGroup } from '../group/group';
import { MapService } from '../services/map.service';
import { GroupService } from '../services/group.service';
import { PopupService } from '../services/popup.service';
import { Ipath } from '../interfaces/path';
export declare class PolylineElement {
    private mapService;
    private groupService;
    private popupService;
    private LeafletElement;
    private LeafletGroup;
    latlngs: Array<Array<number>>;
    Options: Ipath;
    mouseover: string;
    onclick: string;
    polyline: any;
    inheritedOptions: any;
    constructor(mapService: MapService, groupService: GroupService, popupService: PopupService, LeafletElement?: LeafletElement, LeafletGroup?: LeafletGroup);
    ngOnInit(): void;
    ngOnChanges(inputChanges: any): void;
}
