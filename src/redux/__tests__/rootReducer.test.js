import reducer from "../rootReducer";
import * as types from "../ActionTypes";

describe("root reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({ answers: [] });
  });
  it("should handle ADD_ANSWER ", () => {
    expect(
      reducer(undefined, {
        type: types.ADD_ANSWER,
        answer: "Today"
      })
    ).toEqual({ answers: ["Today"] });

    expect(
      reducer(
        { answers: ["Today"] },
        {
          type: types.ADD_ANSWER,
          answer: "Tomorrow"
        }
      )
    ).toEqual({ answers: ["Today", "Tomorrow"] });
  });

  it("should handle RESET_STORE ", () => {
    expect(
      reducer(
        { answers: ["Today", "Tomorrow"] },
        {
          type: types.RESET_STORE
        }
      )
    ).toEqual({ answers: [] });
  });
});
