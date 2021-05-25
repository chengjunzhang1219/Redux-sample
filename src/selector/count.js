import { createSelector } from "reselect";

export const getCountFromState = (state) => state.counter.count;
