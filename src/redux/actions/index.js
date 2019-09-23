import * as types from "../ActionTypes";

export function addNewAnswer(answer) {
  return {
    type: types.ADD_ANSWER,
    answer
  };
}

export function resetStore() {
  return {
    type: types.RESET_STORE
  };
}
