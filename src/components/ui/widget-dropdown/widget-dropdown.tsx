import { Component, Event, EventEmitter, Prop, State } from '@stencil/core';

@Component({
  tag: 'widget-dropdown',
  styleUrl: 'widget-dropdown.css',
  shadow: true
})
export class myDropdown {
  /**
   * @public
   * @property items
   *
   * Defines the data that we want to load into our dropdown area
   *
   */
  public items : Array<any> = [
    {
      value: '12-12-12',
      key: '12-12-12'
    },
    {
      value: '12-12-12',
      key: '12-12-12'
    },
    {
      value: '12-12-12',
      key: '12-12-12'
    }
  ];
  @Prop() name       : string;
  @State() toggle    : boolean = false;
  @Event() onToggle  : EventEmitter;
  toggleComponent(): void
  {
    this.toggle = !this.toggle;
    this.onToggle.emit({ visible: this.toggle });
  }

  render() {
    return (
      <div>
        <div onClick={() => this. toggleComponent()} class={ this.toggle ? 'top-border dd-header' : 'full-border dd-header' }>
          {this.name} {this.toggle ? <span>&#9650;</span> : <span>&#9660;</span>}
        </div>
        <ul class={ this.toggle ? 'active' : 'inactive' }>
          {this.items.map(item => <li><span class="dd-option-text">{item.value}</span></li>)}
        </ul>
      </div>
  )
  }
}
