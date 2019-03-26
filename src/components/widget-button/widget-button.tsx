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
    const style = {
      transformOrigin: 'center'
    }
    return [
      <div class="buttons">
        <a href="#" id="popup__toggle" onClick={this.openChannels.bind(this)}>
          <div class={this.isOpenChannels ? "d-none" : "circlephone"} style={style}></div>
          <div class={this.isOpenChannels ? "d-none" : "circle-fill"} style={style}></div>
          <div class="img-circle" style={style}>
            <div style={style} class={this.isOpenChannels ? "d-none" : "img-circleblock"}>
              <img
                class={this.isOpenChannels ? "d-none" : ''}
                src="../../assets/icons/call-answer.svg" alt=""/>
            </div>
            <span class={!this.isOpenChannels ? "d-none" : 'close-button'}> &#10005;</span>
          </div>
        </a>
        {this.isOpenChannels && (
        <div class="d-flex channels-wrapper">
          <ul class="channels">
            <li><span>sms</span></li>
            <li><img src="../../assets/icons/telegram.svg" alt=""/></li>
            <li><img src="../../assets/icons/facebook-logo.svg" alt=""/></li>
            <li><img src="../../assets/icons/vk-logo.svg" alt=""/></li>
          </ul>
          <div class="main-button main-button-phone mln-1">
            <img
              src="../../assets/icons/call-answer.svg" alt=""/>
          </div>
          </div>
        )}
      </div>
    ]
  }
}
