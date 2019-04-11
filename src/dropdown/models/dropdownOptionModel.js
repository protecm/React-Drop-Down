class DropdownOptionModel {
  id;
  value;
  constructor(id, value) {
    this.id = id;
    this.value = value;
  }

  static create() {
    return new DropdownOptionModel(undefined, undefined);
  }
}

export default DropdownOptionModel;
