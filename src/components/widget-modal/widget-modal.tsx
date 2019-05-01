import {Component, Event, EventEmitter, Prop, State} from '@stencil/core';

@Component({
  tag: 'widget-modal',
  styleUrl: 'widget-modal.css',
  shadow: true
})
export class WidgetModal {
  @Prop() configs: any;
  @State() value: string = '+38';
  @Event() onCloseModal: EventEmitter;
  closeModal() {
    this.onCloseModal.emit();
  }
  handleInputValue(event) {
    event.preventDefault();

    // if (event.which < 48 || event.which > 57)
    // {
    //   console.log('number key');
    //   event.preventDefault();
    // }
    // console.log('event', event);
    // const inputValue = (event.target as HTMLInputElement).value;
    // if (this.configs.widget_options.isUkraine) {
    //   this.value = '+38' + inputValue.substring(3);
    // } else {
    //   this.value = (event.target as HTMLInputElement).value;
    // }
    // console.log('this value', this.value);
    // var value = $(this).val();
    // $(this).val($(this).data("initial") + );
  }
  handleSubmit(event) {
    console.log('submit e', event);
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
            <form class="form-group" onSubmit={(e) => this.handleSubmit(e)}>
              <input id="phone-input" class="phone_input" value={this.value} onKeyUp={(e) => {this.handleInputValue(e)}} />
              <select class="phone_date custom_select">
                <option value="123">123</option>
              </select>
              <select class="phone_hour custom_select">
                <option value="1243">1243</option>
              </select>
              <select class="phone_minute custom_select">
                <option value="00" selected>00</option>
                <option value="15">15</option>
                <option value="30">30</option>
                <option value="45">45</option>
              </select>
              <button type="submit" class="submit_button">Waiting for the call</button>
            </form>
          </div>
        </div>
        <div class="footer">
        </div>
      </div>,
    ];
  }
}
