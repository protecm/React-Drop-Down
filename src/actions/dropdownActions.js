import { ADD_DROPDOWN_OPTION } from "./types";

export function addDropdownOptionAction(option) {
  return function(dispatch) {
    dispatch({
      type: ADD_DROPDOWN_OPTION,
      payload: option
    });
  };
}


