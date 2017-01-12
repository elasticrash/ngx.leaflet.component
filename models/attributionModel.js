"use strict";
var attributionModel = (function () {
    function attributionModel(options) {
        this.prefix = "Leaflet";
        this.position = "topright";
        if (options !== null) {
            for (var key in options) {
                if (options[key]) {
                    this[key] = options[key];
                }
            }
        }
    }
    return attributionModel;
}());
exports.attributionModel = attributionModel;
//# sourceMappingURL=attributionModel.js.map