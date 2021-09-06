import * as actions from "./itemsTypes";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.GET_ITEMS_START:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_ITEMS_SUCCESS:
      return {
        ...state,
        items: payload,
        loading: false,
        error: false,
      };
    case actions.GET_ITEMS_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
