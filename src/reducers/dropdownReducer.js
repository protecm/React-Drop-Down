import { ADD_DROPDOWN_OPTION, SELECT_DROPDOWN_OPTION } from "../actions/types";
import DropdownModel from "../dropdown/models/dropdownModel";

const initialState = {
  dropdownData: new DropdownModel()
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_DROPDOWN_OPTION:
      const newdropdownData = state.dropdownData;
      newdropdownData.options.push(action.payload);
      return {
        dropdownData: newdropdownData
      };
      case SELECT_DROPDOWN_OPTION: 
      return {
        dropdownData: action.payload
      }
    default:
      return state;
  }
}
