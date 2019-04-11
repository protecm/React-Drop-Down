import React, { Component } from "react";
import "./dropdownBody.scss";
import PropTypes from "prop-types";
import DropdownOptionModel from "../models/dropdownOptionModel";

class DropdownBody extends Component {
  handleOnSelect = e => {
    const { onSelect } = this.props;
    onSelect && onSelect(e);
  };

  isSelectedOption(option, selected) {
    if (selected && option) {
      return selected.id === option.id;
    }
    return false;
  }

  render() {
    const { options = [], selected = {} } = this.props;
    return (
      <ul className="dropdown-body-container">
        {options.map(option => (
          <li
            className={
              "dropdown-option" +
              (this.isSelectedOption(option, selected) ? " selected" : "")
            }
            key={option.id}
            onClick={() => this.handleOnSelect(option)}
          >
            {option.value}
          </li>
        ))}
      </ul>
    );
  }
}

DropdownBody.defaultProps = {
  options: []
};
DropdownBody.propTypes = {
  options: PropTypes.arrayOf(PropTypes.instanceOf(DropdownOptionModel)),
  onSelect: PropTypes.func,
  selected: PropTypes.instanceOf(DropdownOptionModel)
};

export default DropdownBody;
