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
        this.setGlobalStyles(this.configs);
        console.log('res', res);
      })
  }
  componentWillLoad(){
    this.fetchConfig(this.id)
  }
  setGlobalStyles(configs) {
    console.log('configs', configs);
    const root = document.documentElement;
    root.style.setProperty('--app-primary-color', configs.widget_options.color);
    root.style.setProperty('--app-secondary-color', configs.widget_options.color);
    root.style.setProperty('--app-modal-bg-color', configs.widget_options.modal_bg_color);
  }
  render() {
    if (!this.configs) {
      return null;
    }
    const modal = this.isOpen ? <widget-modal configs={this.configs}/> : null;
    return [
      modal,
      <widget-button configs={this.configs}/>
    ]
  }
}
