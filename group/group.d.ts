import { MapService } from '../services/map.service';
import { GroupService } from '../services/group.service';
export declare class LeafletGroup {
    private mapService;
    private groupService;
    name: string;
    _subscription: any;
    constructor(mapService: MapService, groupService: GroupService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    addLayerGroupToScope(): void;
}
