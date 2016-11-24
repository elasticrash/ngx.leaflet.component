export declare class GroupService {
    private layerGroup;
    private layerGroupNumber;
    constructor();
    addOLayersToGroup(overlay: any): void;
    getObservableLayerGroup(): any;
    getLayerGroup(): any[];
    increaseNumber(): void;
    getLayerNumber(): number;
    refreshGroup(remove: any, add: any, map: any): void;
}
