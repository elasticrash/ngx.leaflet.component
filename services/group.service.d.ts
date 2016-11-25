export declare class GroupService {
    private layerGroup;
    private layerGroupNumber;
    private group;
    constructor();
    addOLayersToGroup(overlay: any, map: any, mapService: any, group: any): void;
    getObservableGroup(): any;
    getGroup(): any;
    getLayerGroup(): any[];
    increaseNumber(): void;
    getLayerNumber(): number;
}
