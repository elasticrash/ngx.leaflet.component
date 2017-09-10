"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    metadata.outputs.forEach(function (method) {
        Mock.prototype[method] = new core_1.EventEmitter();
    });
    return core_1.Component(metadata)(Mock);
}
exports.MockComponent = MockComponent;
//# sourceMappingURL=mock.component.js.map