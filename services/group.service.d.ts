import { GuidService } from '../services/globalId.service';
export declare class GroupService {
    private guidService;
    private layerGroup;
    private layerId;
    private layerGroupNumber;
    private group;
    constructor(guidService: GuidService);
    addOLayersToGroup(overlay: any, map: any, mapService: any, group: any, replace?: boolean, gId?: String): void;
    getObservableGroup(): any;
    getGroup(): any;
    getLayerGroup(): any[];
    increaseNumber(): void;
    getLayerNumber(): number;
}
