export const INCREASE_COUNT = "INCREASE_COUNT";
export const DECREASE_COUNT = "DECREASE_COUNT";

export const increaseCount = (count) => ({
  type: "INCREASE_COUNT",
  count
});

export const decreaseCount = (count) => ({
  type: "DECREASE_COUNT",
  count
});

export const increaseCountAsync = (count) => (dispatch) => {
  setTimeout(() => {
    dispatch(increaseCount(count));
  }, 1000);
};

export const decreaseCountAsync = (count) => (dispatch) => {
  setTimeout(() => {
    dispatch(decreaseCount(count));
  }, 1000);
};
