import { Component, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'widget-button',
  styleUrl: 'widget-button.css',
  shadow: true
})
export class WidgetButton {
  @Event() onOpenModal: EventEmitter;
  openModal() {
    this.onOpenModal.emit()
  }
  render() {
    return <button onClick={this.openModal.bind(this)}>Callback</button>
  }
}
