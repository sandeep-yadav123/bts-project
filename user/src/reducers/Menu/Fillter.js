import { handleActions } from "redux-actions";
import { FilterAction } from "../../actions";

const initialState = {
  data: [],
  isLoading: false,
  dataById: {},
};

export const FillterReducer = handleActions(
  {
    [FilterAction.GET_FILTER_SUCCESS]: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
    [FilterAction.GET_FILTER_SUCCESS_BY_ID]: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
  },
  initialState
);
