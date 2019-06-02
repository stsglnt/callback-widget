import {Component} from '@stencil/core';

@Component({
  tag: 'widget-phone',
  styleUrl: 'widget-phone.css',
  shadow: true
})
export class WidgetPhone {

  render() {

    return [
      <div class="phone-wrapper">
        <div class="content">
          <div class="title">Перезвоним, как откроемся</div>
          <div class="form">
            <div class="form-row">
              <div class="input-wrapper">
                <input placeholder="somephone"/>
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
