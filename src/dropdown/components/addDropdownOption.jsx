import React, { Component } from "react";
import "./addDropdownOption.scss";
import DropdownOptionModel from "../models/dropdownOptionModel";
import PropTypes from "prop-types";

class AddDropdownOption extends Component {
  baseSate;

  constructor(props) {
    super(props);
    this.baseSate = this.state = {
      inputID: "",
      inputValue: ""
    };
  }

  get inputID() {
    const { inputID = "" } = this.state;
    return inputID;
  }

  get inputValue() {
    const { inputValue = "" } = this.state;
    return inputValue;
  }

  get onAdd() {
    return this.props.onAdd;
  }

  handleInputChange = e => {
    const target = e.target;
    this.setState({
      [target.name]: target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const model = new DropdownOptionModel(this.inputID, this.inputValue);
    this.onAdd && this.onAdd(model);
    this.initState();
  };

  initState() {
    this.setState(this.baseSate);
  }

  render() {
    return (
      <div className="add-dropdown-option-container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group row">
            <label htmlFor="inputID" className="col-sm-2 col-form-label">
              ID:
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="inputID"
                name="inputID"
                placeholder="..."
                value={this.inputID}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputValue" className="col-sm-2 col-form-label">
              Value:
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="inputValue"
                name="inputValue"
                placeholder="..."
                value={this.inputValue}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <button type="submit" className="btn btn-primary btn-block">
              Add
            </button>
          </div>
        </form>
      </div>
    );
  }
}

AddDropdownOption.propTypes = {
  onAdd: PropTypes.func
};

export default AddDropdownOption;
