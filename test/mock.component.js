"use strict";
var core_1 = require("@angular/core");
function MockComponent(options) {
    var metadata = {
        selector: options.selector,
        template: options.template || '',
        inputs: options.inputs,
        outputs: options.outputs
    };
    return core_1.Component(metadata)((function () {
        function _() {
        }
        return _;
    }()));
}
exports.MockComponent = MockComponent;
//# sourceMappingURL=mock.component.js.map