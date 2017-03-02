import { Component } from '@angular/core';

export function MockComponent(options: Component): Component {
  let metadata: Component = {
    selector: options.selector,
    template: options.template || '',
    inputs: options.inputs,
    outputs: options.outputs
  };

  class Mock {}

  return Component(metadata)(Mock);
}