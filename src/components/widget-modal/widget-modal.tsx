import {Component, Event, EventEmitter, Prop, State, Element} from '@stencil/core';
import IMask from 'imask';

@Component({
  tag: 'widget-modal',
  styleUrl: 'widget-modal.css',
  shadow: true
})
export class WidgetModal {
  @Prop() configs: any;
  @State() value: string;
  @State() isUkraine: boolean;
  @State() isWorkingTime: string;
  @State() timer = '00:30';
  @Event() onCloseModal: EventEmitter;
  @Element() private element: HTMLElement;
  closeModal() {
    this.onCloseModal.emit();
  }

  handleSubmit() {
    let seconds = 30;
    let countdown = setInterval(() => {
      seconds--;
      this.timer = `00:${seconds}`;
      if (seconds <= 0) clearInterval(countdown);
    }, 1000);
  }
  componentWillLoad(){
    if (this.configs.widget_options.isUkraine) {
      this.value = '+38';
      this.isUkraine = true;
    } else {
      this.isUkraine = false;
    }
  }
  componentDidLoad() {
    const input = this.element.shadowRoot.querySelector('#phone-input');
    if (this.configs.widget_options.isUkraine) {
      const maskOptions = {
        mask: '+{38}(000)000-00-00'
      };
      IMask(input, maskOptions);
    } else {
      IMask(input, {
        mask: Number,
        signed: false,  // disallow negative
        min: -10000,
        max: 10000
      });
    }
  }
  onKeyPressed(e) {
    if ((e.code === 'Backspace' || e.code === 'Delete' || e.code === 'KeyX')
      && e.target.value.length < 5
      && this.isUkraine) {
      e.preventDefault();
    }
  }

  render() {
    return [
      <div class="backdrop"/>,
      <div class="modal">
        <div class="header">
          <a href="#" class="close" onClick={this.closeModal.bind(this)}/>
        </div>
        <div class="body">
          <div class="top">
            <div class="photo"><img src="../../assets/operator.png" alt="operator_photo"/></div>
            <div class="message">Here goes some text bla bla bla bla</div>
          </div>
          <div class="bottom">
            <form class="form-group" onSubmit={() => this.handleSubmit()}>
              <input id="phone-input" class="phone_input" onKeyDown={this.onKeyPressed.bind(this)} value={this.value}/>
              {this.isWorkingTime && (
                <select class="phone_date custom_select">
                  <option value="123">123</option>
                </select>
              )}
              {this.isWorkingTime && (
                <select class="phone_hour custom_select">
                  <option value="1243">1243</option>
                </select>
              )}
              {this.isWorkingTime && (
                <select class="phone_minute custom_select">
                  <option value="00" selected>00</option>
                  <option value="15">15</option>
                  <option value="30">30</option>
                  <option value="45">45</option>
                </select>
              )}
              <button type="submit" class="submit_button">Waiting for the call</button>
              {!this.isWorkingTime && (
                <span>{this.timer}</span>
              )}
            </form>
          </div>
        </div>
        <div class="footer">
        </div>
      </div>,
    ];
  }
}
