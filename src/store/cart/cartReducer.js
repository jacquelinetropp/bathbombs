import * as actions from "./cartTypes";
import { addItemToCart, removeItemFromCart } from "./cartUtils";

const initialState = {
  loading: false,
  error: null,
  cartItems: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.ADD_ITEM_SUCCESS:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, payload),
      };
    case actions.REMOVE_ITEM_SUCCESS:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, payload),
      };

    case actions.CLEAR_ITEM_SUCCESS:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== payload.id
        ),
      };
    default:
      return state;
  }
};
