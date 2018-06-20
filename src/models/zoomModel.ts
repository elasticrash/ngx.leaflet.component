export class ΖoomModel {
    // The text set on the 'zoom in' button.
    public zoomInText: string = "+";
    // The title set on the 'zoom in' button.
    public zoomInTitle: string = "Zoom in";
    // The text set on the 'zoom out' button.
    public zoomOutText: string = "-";
    // The title set on the 'zoom out' button.
    public zoomOutTitle: string = "Zoom out";
    // The position of the control (one of the map corners).
    // Possible values are 'topleft', 'topright', 'bottomleft' or 'bottomright'
    public position: string = "topright";
    constructor(options: any) {
        const source: any = options;
        const copy: any = this;

        if (source !== null) {
            for (const key in source) {
                if (source[key] !== undefined) {
                    copy[key] = source[key];
                }
            }
        }
    }
}
