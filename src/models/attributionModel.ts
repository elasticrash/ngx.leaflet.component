export class AttributionModel {
    constructor(options: any) {
        if (options !== null) {
            for (var key in options) {
                if (options[key] !== undefined) {
                    this[key] = options[key];
                }
            }
        }
    }
    prefix: string = "Leaflet";	// The HTML text shown before the attributions. Pass false to disable.
    position: string = "bottomright"  // The position of the control (one of the map corners). Possible values are 'topleft', 'topright', 'bottomleft' or 'bottomright'
}
