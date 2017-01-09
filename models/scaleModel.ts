export class scaleModel {
    constructor(options: any) {
        if (options !== null) {
            for (var key in options) {
                if (options[key]) {
                    this[key] = options[key];
                }
            }
        }
    }
    maxWidth: number = 100;	//Maximum width of the control in pixels. The width is set dynamically to show round values (e.g. 100, 200, 500).
    metric: boolean = true;	//Whether to show the metric scale line (m/km).
    imperial: boolean = true;	//Whether to show the imperial scale line (mi/ft).
    updateWhenIdle: boolean = true;	//If true, the control is updated on moveend, otherwise it's always up-to-date (updated on move).
    position: string = "topright"  //The position of the control (one of the map corners). Possible values are 'topleft', 'topright', 'bottomleft' or 'bottomright'
}