import * as types from "./ActionTypes";

const initialState = {
  answers: []
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_ANSWER:
      return {
        answers: [...state.answers, action.answer]
      };
    case types.RESET_STORE: {
      return initialState;
    }
    default:
      return state;
  }
}
export default rootReducer;
