export class AttributionModel {
    // The HTML text shown before the attributions. Pass false to disable.
    public prefix: string = "Leaflet";
    // The position of the control (one of the map corners).
    // Possible values are 'topleft', 'topright', 'bottomleft' or 'bottomright'
    public position: string = "bottomright";

    constructor(options: any) {
        if (options !== null) {
            for (const key in options) {
                if (options[key] !== undefined) {
                    this[key] = options[key];
                }
            }
        }
    }
}
