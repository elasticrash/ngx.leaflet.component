import { LeafletElement } from '../map/map';
import { LeafletGroup } from '../group/group';
import { MapService } from '../services/map.service';
import { GroupService } from '../services/group.service';
import { PopupService } from '../services/popup.service';
import { Ipath } from '../interfaces/path';
export declare class CircleElement {
    private mapService;
    private groupService;
    private popupService;
    private LeafletElement;
    private LeafletGroup;
    lat: number;
    lon: number;
    radius: number;
    mouseover: string;
    onclick: string;
    Options: Ipath;
    constructor(mapService: MapService, groupService: GroupService, popupService: PopupService, LeafletElement?: LeafletElement, LeafletGroup?: LeafletGroup);
    ngOnInit(): void;
}
