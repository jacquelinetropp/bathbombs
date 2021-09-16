import * as actions from "./orderTypes";

const initialState = {
  loading: false,
  error: null,
  orders: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.GET_ORDERS_START:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_ORDERS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        orders: payload,
      };
    case actions.GET_ORDERS_SUCCESS:
        return {
            ...state,
            loading: false,
            error: payload
        }
    default:
      return state;
  }
};
