export class zoomModel {
    constructor(options: any) {
        if (options !== null) {
            for (var key in options) {
                if (options[key] !== undefined) {
                    this[key] = options[key];
                }
            }
        }
    }
    zoomInText: string = "+";	//The text set on the 'zoom in' button.
    zoomInTitle: string = "Zoom in";	//The title set on the 'zoom in' button.
    zoomOutText: string = "-";	//The text set on the 'zoom out' button.
    zoomOutTitle: string = "Zoom out";	//The title set on the 'zoom out' button.
    position: string = "topright"  //The position of the control (one of the map corners). Possible values are 'topleft', 'topright', 'bottomleft' or 'bottomright'
}