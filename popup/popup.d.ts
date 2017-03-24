import { LeafletElement } from '../map/map';
import { LeafletGroup } from '../group/group';
import { MapService } from '../services/map.service';
import { GroupService } from '../services/group.service';
import { CoordinateHandler } from '../helpers/coodinateHandler';
export declare class PopupElement extends CoordinateHandler {
    private mapService;
    private groupService;
    private LeafletElement;
    private LeafletGroup;
    lat: number;
    lon: number;
    content: string;
    constructor(mapService: MapService, groupService: GroupService, LeafletElement?: LeafletElement, LeafletGroup?: LeafletGroup);
    ngOnInit(): void;
}
