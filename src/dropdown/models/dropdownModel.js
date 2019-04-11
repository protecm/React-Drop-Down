class DropdownModel {
  selectedOption;
  options;

  constructor(selectedOption = null, options = []) {
    this.selectedOption = selectedOption;
    this.options = options;
  }

  static create() {
    return new DropdownModel();
  }
}

export default DropdownModel;
