"use strict";
var scaleModel = (function () {
    function scaleModel(options) {
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
    return scaleModel;
}());
exports.scaleModel = scaleModel;
//# sourceMappingURL=scaleModel.js.map