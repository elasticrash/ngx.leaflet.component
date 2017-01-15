"use strict";
var attributionModel = (function () {
    function attributionModel(options) {
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
    return attributionModel;
}());
exports.attributionModel = attributionModel;
//# sourceMappingURL=attributionModel.js.map