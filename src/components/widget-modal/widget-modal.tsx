import { Component } from '@stencil/core';

@Component({
  tag: 'widget-modal',
  styleUrl: 'widget-modal.css',
  shadow: true
})
export class WidgetModal {
  render() {
    return [
      <div class="backdrop"></div>,
      <div class="modal">Hello, World! I'm future widget modal window </div>
    ];
  }
}
