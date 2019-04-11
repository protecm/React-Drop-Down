import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.scss";

import AddDropdownOption from "./dropdown/components/addDropdownOption";
import Dropdown from "./dropdown/components/dropdown";
import { addDropdownOptionAction } from "./actions/dropdownActions";

class App extends Component {
  handleOnDropDownOptionAdd = e => {
    this.props.addDropdownOptionAction(e);
  };

  render() {
    const { dropdownData } = this.props;
    return (
        <div className="App">
          <div id="container" className="kuku">
            <div id="divAddDropDownOptionForm">
              <AddDropdownOption onAdd={this.handleOnDropDownOptionAdd} />
            </div>
            <div id="divDropDownView">
              <Dropdown model={dropdownData} />
            </div>
            <div>Footer</div>
          </div>
        </div>
    );
  }
}


const mapStateToProps = state => ({
  dropdownData: state.dropdown.dropdownData
});

const mapDispatchToProps = dispatch => ({
  addDropdownOptionAction: e => {
    dispatch(addDropdownOptionAction(e));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
