import * as actions from "./userTypes";

const initialState = {
  error: null,
  loading: false,
  orders: {
    loading: false,
    error: null,
    items: []
  }
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.AUTH_START:
      return {
        ...state,
        loading: true,
      };
    case actions.AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
      };
    case actions.AUTH_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    
    case actions.ADD_ORDER_START: 
      return {
        ...state,
        orders: {
          ...state.orders,
          loading: true
        }
      }

      case actions.ADD_ORDER_SUCCESS: 
      return {
        ...state,
        orders: {
          ...state.orders,
          loading: false,
          error: false,
          items: payload
        }
      }

      case actions.ADD_ORDER_FAIL: 
      return {
        ...state,
        orders: {
          ...state.orders,
          loading: false,
          error: payload
        }
      }

    default:
      return state;
  }
};
