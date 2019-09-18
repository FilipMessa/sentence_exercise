export function addNewAnswer(answer) {
  return {
    type: "ADD_ANSWER",
    answer
  };
}

export function resetStore() {
  return {
    type: "RESET_STORE"
  };
}
