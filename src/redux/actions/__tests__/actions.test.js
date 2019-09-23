import * as actions from "../../actions/";
import * as types from "../../ActionTypes";

describe("actions", () => {
  it("should create an action to add a answer", () => {
    const answer = "Today";
    const expectedAction = {
      type: types.ADD_ANSWER,
      answer
    };
    expect(actions.addNewAnswer(answer)).toEqual(expectedAction);
  });
  it("should create an action to reset the store", () => {
    const expectedAction = {
      type: types.RESET_STORE
    };
    expect(actions.resetStore()).toEqual(expectedAction);
  });
});
