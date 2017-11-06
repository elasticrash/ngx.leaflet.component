import { MapService } from '../services/map.service';
import { GroupService } from '../services/group.service';
import { GuidService } from '../services/globalId.service';
export declare class LeafletGroup {
    private mapService;
    private groupService;
    private guidService;
    name: string;
    globalId: string;
    constructor(mapService: MapService, groupService: GroupService, guidService: GuidService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
}
