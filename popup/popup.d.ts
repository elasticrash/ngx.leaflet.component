import { LeafletElement } from '../map/map';
import { LeafletGroup } from '../group/group';
import { MapService } from '../services/map.service';
import { GroupService } from '../services/group.service';
import { Ipath } from '../interfaces/path';
export declare class PopupElement {
    private mapService;
    private groupService;
    private LeafletElement;
    private LeafletGroup;
    lat: number;
    lon: number;
    content: string;
    Options: Ipath;
    constructor(mapService: MapService, groupService: GroupService, LeafletElement?: LeafletElement, LeafletGroup?: LeafletGroup);
    ngOnInit(): void;
}
