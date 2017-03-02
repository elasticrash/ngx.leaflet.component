"use strict";
var core_1 = require("@angular/core");
function MockComponent(options) {
    var metadata = {
        selector: options.selector,
        template: options.template || '',
        inputs: options.inputs,
        outputs: options.outputs
    };
    var Mock = (function () {
        function Mock() {
        }
        return Mock;
    }());
    return core_1.Component(metadata)(Mock);
}
exports.MockComponent = MockComponent;
//# sourceMappingURL=mock.component.js.map