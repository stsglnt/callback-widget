import { Component } from '@stencil/core';

@Component({
  tag: 'widget-modal',
  styleUrl: 'widget-modal.css',
  shadow: true
})
export class WidgetModal {
  render() {
    return [
      <div class="backdrop"></div>,
      <div class="modal">Here goes some dummy text
        <form>
          <label htmlFor="">
            First Name
            <input/>
          </label>
          <label htmlFor="">
            Last Name
            <input/>
          </label>
          <label htmlFor="">
            Role
            <select name="role" id="select_role">
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          </label>
          <label htmlFor="">
            Phone
            <input type="number"/>
          </label>
          <label htmlFor="">
            Country
            <input/>
          </label>
        </form>
        <button type="submit">Submit</button>
      </div>,
    ];
  }
}
