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