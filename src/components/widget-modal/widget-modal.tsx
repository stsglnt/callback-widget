import {Component, Event, EventEmitter, Prop} from '@stencil/core';

@Component({
  tag: 'widget-modal',
  styleUrl: 'widget-modal.css',
  shadow: true
})
export class WidgetModal {
  @Prop() configs: any;
  @Event() onCloseModal: EventEmitter;
  closeModal() {
    this.onCloseModal.emit();
  }
  handleInputValue(event) {
    console.log('event, ', event);
    // var value = $(this).val();
    // $(this).val($(this).data("initial") + value.substring(3));
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
            <form class="form-group">
              <input class="phone_input" value="+38" onKeyUp={this.handleInputValue.bind(this)} />
              <select class="phone_date">
                <option value="123">123</option>
              </select>
              <select class="phone_hour">
                <option value="1243">1243</option>
              </select>
              <select class="phone_minute">
                <option value="1223">1223</option>
              </select>
            </form>
          </div>
        </div>
        <div class="footer">
          <button type="submit">Submit</button>
        </div>
      </div>,
    ];
  }
}
