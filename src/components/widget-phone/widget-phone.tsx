import {Component, Prop, State, Element} from '@stencil/core';
import IMask from 'imask';
@Component({
  tag: 'widget-phone',
  styleUrl: 'widget-phone.css',
  shadow: true
})
export class WidgetPhone {
  @State() isFlagsOpen: boolean;
  @Prop({mutable: true}) value: string;
  @State() isUkraine: boolean;
  @State() first;
  @Prop() configs: any;
  @Prop({mutable: true}) currentFlag = '../../assets/icons/ua.png';
  @Element() private element: HTMLElement;
  @State() mask: any;
  @State() mask2: any;
  // life cycles
  componentWillLoad() {
    if (this.configs.widget_options.isUkraine) {
      // this.value = '+38';
      this.isUkraine = true;
    }
  }
  componentDidLoad() {
    this.first = true;
    this.isUkraine = true;
    this.mask2 = IMask;
    const phoneInput = this.element.shadowRoot.querySelector('#phone-input');
    this.mask = IMask(phoneInput, {
      mask: '+{38}(000)000-00-00'
    })
  }
  openFlags() {
    this.isFlagsOpen = !this.isFlagsOpen;
  }
  setFlag(flag: 'ua' | 'worldwide') {
    this.currentFlag = `../../assets/icons/${flag}.png`;
    this.isFlagsOpen = false;
    this.updateInputMask(flag);
  }
  updateInputMask(flag) {
    const ukraineMask = {
      mask: '+{38}(000)000-00-00'
    };
    const globalMask = {
      mask: Number
    };
    if (flag === 'ua') {
      this.mask.updateOptions(ukraineMask);
      this.isUkraine = true;
    } else {
      this.mask.updateOptions(globalMask);
      this.isUkraine = false;
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
      <div class="phone-wrapper">
        <div class="content">
          <div class="title">Перезвоним, как откроемся</div>
          <div class="form">
            <div class="form-row">
              <div class="input-wrapper">
                <div class="flags">
                  <div class="flag-caret" onClick={this.openFlags.bind(this)}>
                    <img src={this.currentFlag} alt=""/>
                  </div>
                  {this.isFlagsOpen && (
                    <div class="flags-list">
                      <ul>
                        <li onClick={() => this.setFlag('ua')}>
                          <img src="../../assets/icons/ua.png" alt=""/>
                          <span>Ukraine</span>
                          <span>+{38}(000)000-00-00</span>
                        </li>
                        <li onClick={() => this.setFlag('worldwide')}>
                          <img src="../../assets/icons/worldwide.png" alt=""/>
                          <span>Global</span>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
                <input placeholder="" id="phone-input" onKeyDown={this.onKeyPressed.bind(this)} value={this.value}/>
              </div>
              <div class="button-wrapper">
                <button>Waiting for a call</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    ]
  }
}
