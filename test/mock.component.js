import { Component, EventEmitter } from '@angular/core';
export function MockComponent(options) {
    const metadata = {
        selector: options.selector,
        template: options.template || '',
        inputs: options.inputs,
        outputs: options.outputs || []
    };
    class Mock {
    }
    metadata.outputs.forEach(method => {
        Mock.prototype[method] = new EventEmitter();
    });
    return Component(metadata)(Mock);
}
//# sourceMappingURL=mock.component.js.map