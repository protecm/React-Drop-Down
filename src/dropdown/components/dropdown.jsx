import React, { Component } from "react";
import "./dropdown.scss";
import DropdownBody from "./dropdownBody";
import PropTypes from "prop-types";
import DropdownModel from "../models/dropdownModel";
import DropdownOptionModel from "../models/dropdownOptionModel";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: false,
      selected: undefined
    };
  }

  isOutsideClickAttached = false;

  handleDropdownOnFocus = e => {
    this.setState({ isFocused: true });
    document.addEventListener("click", this.handleOnOutsideClick);
  };

  handleOnOutsideClick = e => {
    const target = e.target;
    if (target.name !== "inputDropdown") {
      this.handleDropdownOnBlur(e);
    }
  };

  handleDropdownOnBlur = e => {
    this.setState({ isFocused: false });
    document.removeEventListener("click", this.handleOnOutsideClick);
  };

  handleDropdownOnSelect = e => {
    this.setState({ selected: e });
  };

  render() {
    const { isFocused, selected = DropdownOptionModel.create() } = this.state;
    const { value = "" } = selected;
    const {
      model: { options }
    } = this.props;

    return (
      <div className="dropdown-container">
        <div className="dropdown-input">
          <input
            name="inputDropdown"
            type="text"
            style={{ cursor: "pointer" }}
            className="form-control"
            placeholder="Select..."
            aria-label="Select"
            aria-describedby="Select"
            value={value}
            onFocus={this.handleDropdownOnFocus}
            readOnly
          />
        </div>
        <div className="dropdown-body">
          {isFocused && (
            <DropdownBody
              options={options}
              selected={selected}
              onSelect={this.handleDropdownOnSelect}
            />
          )}
        </div>
      </div>
    );
  }
}

Dropdown.propTypes = {
  model: PropTypes.instanceOf(DropdownModel).isRequired
};

export default Dropdown;
