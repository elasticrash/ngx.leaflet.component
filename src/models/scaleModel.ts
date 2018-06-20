export class ScaleModel {
    // Maximum width of the control in pixels. The width is set dynamically to show round values (e.g. 100, 200, 500).
    public maxWidth: number = 100;
    // Whether to show the metric scale line (m/km).
    public metric: boolean = true;
    // Whether to show the imperial scale line (mi/ft).
    public imperial: boolean = true;
    // If true, the control is updated on moveend, otherwise it's always up-to-date (updated on move).
    public updateWhenIdle: boolean = true;
    // The position of the control (one of the map corners).
    // Possible values are 'topleft', 'topright', 'bottomleft' or 'bottomright'
    public position: string = "bottomleft";

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
