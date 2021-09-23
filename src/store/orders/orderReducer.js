import * as actions from "./orderTypes";

const initialState = {
  loading: false,
  error: null,
  orders: [],
};

const actionStart = (state) => {
  return {
    ...state,
    loading: true
  }
}

const actionSuccess = state => {
  return {
    ...state,
    loading: false,
    error: false
  }
}

const actionFail = (state,payload) => {
  return {
    ...state,
    loading: false,
    error: payload
  }
}
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.ADD_ORDER_START:
      return {
        ...state,
        loading: true,
      };

    case actions.ADD_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
      };

    case actions.ADD_ORDER_FAIL:
      return {
        ...state,
          loading: false,
          error: payload,
      };

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
        error: payload,
      };

      case actions.CHANGE_ORDER_START:
        return actionStart(state);
      case actions.CHANGE_ORDER_SUCCESS:
        return actionSuccess(state);
      case actions.CHANGE_ORDER_FAIL:
        return actionFail(state, payload);

        case actions.DELETE_ORDER_START:
          return actionStart(state);
        case actions.DELETE_ORDER_SUCCESS:
          return actionSuccess(state);
        case actions.DELETE_ORDER_FAIL:
          return actionFail(state, payload);

    default:
      return state;
  }
};
