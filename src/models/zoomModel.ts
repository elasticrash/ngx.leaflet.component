export class zoomModel {
    constructor(options: any) {
        let source: any = options;
        let copy: any = this;

        if (source !== null) {
            for (var key in source) {
                if (source[key] !== undefined) {
                    copy[key] = source[key];
                }
            }
        }
    }
    zoomInText: string = "+";	//The text set on the 'zoom in' button.
    zoomInTitle: string = "Zoom in";	//The title set on the 'zoom in' button.
    zoomOutText: string = "-";	//The text set on the 'zoom out' button.
    zoomOutTitle: string = "Zoom out";	//The title set on the 'zoom out' button.
    position: string = "topright";  //The position of the control (one of the map corners). Possible values are 'topleft', 'topright', 'bottomleft' or 'bottomright'
}