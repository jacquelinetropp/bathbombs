import * as actions from './cartTypes';

export const addItem = (item) => ({
    type: actions.ADD_ITEM_SUCCESS,
    payload: item
})

export const removeItem = (item) => ({
    type: actions.REMOVE_ITEM_SUCCESS,
    payload: item
})

export const clearItem = (item) => ({
    type: actions.CLEAR_ITEM_SUCCESS,
    payload: item,
  });

export const clearAllItems = () => ({
    type: actions.CLEAR_ALL_ITEMS
})

export const toggleCart = () => ({
    type: actions.TOGGLE_CART_HIDDEN
})

export const closeCart = () => ({
    type: actions.CLOSE_CART_HIDDEN
})