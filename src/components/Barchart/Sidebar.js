import React, { Component } from "react";
import { push as Menu } from "react-burger-menu";

class Sidebar extends Component {
  state = {};

  render() {
    return (
      <div>
        {console.log(this.props)}
        <Menu>
          <form>
            <input
              name="overall"
              type="checkbox"
              defaultChecked
              onChange={this.props.updateParentOverall}
            />
            <label>Overall</label>
            <br />
            <input
              name="median"
              type="checkbox"
              defaultChecked
              onChange={this.props.updateParentMedian}
            />
            <label>Median</label>
            <br />
            <input
              name="multiple"
              type="checkbox"
              defaultChecked
              onChange={this.props.updateParentMultiple}
            />
            <label>Multiple classes</label>
            <br />
            <input
              name="men"
              type="checkbox"
              defaultChecked
              onChange={this.props.updateParentMen}
            />
            <label>Men</label>
            <br />
            <input
              name="poc"
              type="checkbox"
              defaultChecked
              onChange={this.props.updateParentPOC}
            />
            <label>POC</label>
            <br />
            <input
              name="women"
              type="checkbox"
              defaultChecked
              onChange={this.props.updateParentWomen}
            />
            <label>Women</label>
            <br />
            <input
              name="single"
              type="checkbox"
              defaultChecked
              onChange={this.props.updateParentSingle}
            />
            <label>Single class</label>
            <br />
            <input
              name="veterans"
              type="checkbox"
              defaultChecked
              onChange={this.props.updateParentVeterans}
            />
            <label>Veterans</label>
            <br />
          </form>
        </Menu>
      </div>
    );
  }
}

export default Sidebar;
