import {Component, Event, EventEmitter, Prop} from '@stencil/core';

@Component({
  tag: 'widget-button',
  styleUrl: 'widget-button.css',
  shadow: true
})
export class WidgetButton {
  @Event() onOpenModal: EventEmitter;
  @Prop({mutable: true}) isOpenChannels = false;
  openModal() {
    this.onOpenModal.emit()
  }
  openChannels() {
    this.isOpenChannels = !this.isOpenChannels;
  }
  render() {
    return [
      <div class="buttons">
        <div class="main-button pulse " onClick={this.openChannels.bind(this)}>
          <img
            class={this.isOpenChannels ? "d-none" : ''}
            src="../../assets/icons/call-answer.svg" alt=""/>
          <span class={!this.isOpenChannels ? "d-none" : 'close-button'}> &#10005;
          </span>
        </div>
        {this.isOpenChannels && (
        <div class="d-flex">
          <div class="main-button main-button-phone mln-1">
            <img
              src="../../assets/icons/call-answer.svg" alt=""/>
          </div>
          <ul class="channels">
            <li><span>sms</span></li>
            <li><img src="../../assets/icons/telegram.svg" alt=""/></li>
            <li><img src="../../assets/icons/facebook-logo.svg" alt=""/></li>
            <li><img src="../../assets/icons/vk-logo.svg" alt=""/></li>
          </ul>
          </div>
        )}
      </div>
    ]
  }
}
