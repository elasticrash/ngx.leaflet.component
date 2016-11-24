export declare class GroupService {
    private layerGroup;
    private layerGroupNumber;
    private flag;
    constructor();
    addOLayersToGroup(overlay: any): boolean;
    getObservableLayerGroup(): any;
    getObservableFlag(): any;
    getLayerGroup(): any[];
    increaseNumber(): void;
    getLayerNumber(): number;
    refreshGroup(remove: any, add: any, map: any): void;
}
