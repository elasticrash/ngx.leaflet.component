export class attributionModel {
    constructor(options) {
        this.prefix = "Leaflet";
        this.position = "bottomright";
        if (options !== null) {
            for (var key in options) {
                if (options[key] !== undefined) {
                    this[key] = options[key];
                }
            }
        }
    }
}
//# sourceMappingURL=attributionModel.js.map