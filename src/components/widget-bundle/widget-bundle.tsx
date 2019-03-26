import {Component, Listen, State, Prop} from '@stencil/core';

@Component({
  tag: 'callback-widget',
  styleUrl: 'widget-bundle.css',
  shadow: true
})
export class WidgetBundle {
  @Prop({mutable: true}) isOpen = false;
  @Prop() id: string;
  @State() configs: any; // TODO: add interface
  @Listen('onOpenModal')
  openModal() {
    this.isOpen = !this.isOpen;
  }
  fetchConfig(id) {
    const url = `http://localhost:3000/options/${id}`;
    fetch(url)
      .then(res => {
        return res.json()
      })
      .then(res => {
        this.configs = JSON.parse(JSON.stringify(res));
        console.log('res', res);
      })
  }
  componentWillLoad(){
    this.fetchConfig(this.id)
  }
  render() {
    if (!this.configs) {
      return null;
    }
    const modal = this.isOpen ? <widget-modal></widget-modal> : null;
    return [
      modal,
      <widget-button configs={this.configs}></widget-button>
    ]
  }
}
