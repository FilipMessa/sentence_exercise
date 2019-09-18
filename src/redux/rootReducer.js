// add question to initalState as a Constant

const initialState = {
  answers: []
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ANSWER":
      return {
        answers: [...state.answers, action.answer]
      };
    case "RESET_STORE": {
      return initialState;
    }
    default:
      return state;
  }
}
export default rootReducer;
