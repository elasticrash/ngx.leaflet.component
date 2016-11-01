import { MapService } from '../services/map.service';
import { GroupService } from '../services/group.service';
import { LeafletElement } from '../map/map';
import { LeafletGroup } from '../group/group';
export declare class MarkerElement {
    private mapService;
    private groupService;
    private LeafletElement;
    private LeafletGroup;
    lat: number;
    lon: number;
    mouseover: string;
    constructor(mapService: MapService, groupService: GroupService, LeafletElement?: LeafletElement, LeafletGroup?: LeafletGroup);
    ngOnInit(): void;
}
