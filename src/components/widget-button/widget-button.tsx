import {Component, Event, EventEmitter, Prop} from '@stencil/core';

@Component({
  tag: 'widget-button',
  styleUrl: 'widget-button.css',
  shadow: true
})
export class WidgetButton {
  @Event() onOpenModal: EventEmitter;
  @Prop({mutable: true}) isOpenChannels = false;
  @Prop() configs: any;
  openModal() {
    if (this.configs.full_widget) {
      this.onOpenModal.emit()
    } else {
      this.isOpenChannels = !this.isOpenChannels;
    }
  }
  render() {
    const style = {
      transformOrigin: 'center'
    };
    return [
      <div class="buttons">
        <a href="#" id="popup__toggle" onClick={this.openModal.bind(this)}>
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
            <li>
              <a href={`https://join.skype.com/bot/${this.configs.channels && this.configs.channels.skype}`} target="_blank">
              <img src="../../assets/icons/skype-32.png" alt=""/>
              </a>
            </li>
            <li>
              <a href={`tg://resolve?domain=${this.configs.channels && this.configs.channels.telegram}`} target="_blank">
              <img src="../../assets/icons/telegram.svg" alt=""/>
              </a>
            </li>
            <li>
              <a href={`http://m.me/${this.configs.channels && this.configs.channels.messenger}`} target="_blank">
              <img src="../../assets/icons/facebook-logo-white.svg" alt="" class="messenger-logo" />
              </a>
            </li>
            <li>
              <a href={`http://vk.com/${this.configs.channels && this.configs.channels.vk}`} target="_blank">
                <img src="../../assets/icons/vk-logo.svg" alt=""/>
              </a>
            </li>
            <li>
            <a href={`https://wa.me/${this.configs.channels && this.configs.channels.whatsapp}`} target="_blank">
              <img src="../../assets/icons/whatsapp-32.png" alt=""/>
            </a>
          </li>
            <li>
              <a href={`viber://chat?number=${this.configs.channels && this.configs.channels.viber}`} target="_blank">
                <img src="../../assets/icons/purple_White_icon.svg" alt="" class="viber-icon"/>
              </a>
            </li>
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
