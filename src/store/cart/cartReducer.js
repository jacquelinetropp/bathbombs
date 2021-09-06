import * as actions from "./cartTypes";
import {addItemToCart, removeItemFromCart} from './cartUtils';

const initialState = {
  loading: false,
  error: null,
  cartItems: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.ADD_ITEM_START:
      return {
        ...state,
        loading: true,
      };
    case actions.ADD_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        cartItems: addItemToCart(state.cartItems, payload),
      };
    case actions.ADD_ITEM_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
