import * as actions from './cartTypes';

// export const addItem = (item) => async (dispatch, {getFirebase}, getState) => {
//     const firebase = getFirebase();

//     dispatch({type: actions.ADD_ITEM_START});

//     try{


//     } catch(e) {
//         dispatch({type: actions.ADD_ITEM_FAIL, payload: e})
//     }
// }

export const addItem = (item) => ({
    type: actions.ADD_ITEM_SUCCESS,
    payload: item
})