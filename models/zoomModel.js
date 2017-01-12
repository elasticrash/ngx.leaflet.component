"use strict";
var zoomModel = (function () {
    function zoomModel(options) {
        this.zoomInText = "+";
        this.zoomInTitle = "Zoom in";
        this.zoomOutText = "-";
        this.zoomOutTitle = "Zoom out";
        this.position = "topright";
        if (options !== null) {
            for (var key in options) {
                if (options[key]) {
                    this[key] = options[key];
                }
            }
        }
    }
    return zoomModel;
}());
exports.zoomModel = zoomModel;
//# sourceMappingURL=zoomModel.js.map