export class zoomModel {
    constructor(options) {
        this.zoomInText = "+";
        this.zoomInTitle = "Zoom in";
        this.zoomOutText = "-";
        this.zoomOutTitle = "Zoom out";
        this.position = "topright";
        if (options !== null) {
            for (var key in options) {
                if (options[key] !== undefined) {
                    this[key] = options[key];
                }
            }
        }
    }
}
//# sourceMappingURL=zoomModel.js.map