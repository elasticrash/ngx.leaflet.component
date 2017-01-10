import { LeafletElement } from '../map/map';
import { LeafletGroup } from '../group/group';
import { MapService } from '../services/map.service';
import { GroupService } from '../services/group.service';
import { PopupService } from '../services/popup.service';
import { GuidService } from '../services/globalId.service';
import { HelperService } from '../services/helper.service';
import { Ipath } from '../interfaces/path';
export declare class PolygonElement {
    private mapService;
    private groupService;
    private popupService;
    private guidService;
    private helperService;
    private LeafletElement;
    private LeafletGroup;
    latlngs: any;
    Options: Ipath;
    mouseover: string;
    onclick: string;
    polygon: any;
    originalObject: any;
    globalId: string;
    constructor(mapService: MapService, groupService: GroupService, popupService: PopupService, guidService: GuidService, helperService: HelperService, LeafletElement?: LeafletElement, LeafletGroup?: LeafletGroup);
    ngOnInit(): void;
    ngDoCheck(): void;
}
