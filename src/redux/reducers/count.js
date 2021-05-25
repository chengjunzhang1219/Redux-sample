import * as actions from "../actions";
const initialState = {
  count: 0
};
export default function count(state = initialState, action) {
  let newState = { ...state };
  switch (action.type) {
    case actions.INCREASE_COUNT:
      newState.count = state.count + 1;
      return newState;
    case actions.DECREASE_COUNT:
      newState.count = state.count - 1;
      return newState;
    default:
      return state;
  }
}
