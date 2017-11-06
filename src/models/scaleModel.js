export class scaleModel {
    constructor(options) {
        this.maxWidth = 100;
        this.metric = true;
        this.imperial = true;
        this.updateWhenIdle = true;
        this.position = "bottomleft";
        if (options !== null) {
            for (var key in options) {
                if (options[key] !== undefined) {
                    this[key] = options[key];
                }
            }
        }
    }
}
//# sourceMappingURL=scaleModel.js.map