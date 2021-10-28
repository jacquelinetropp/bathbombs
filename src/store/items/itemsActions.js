import * as actions from "./itemsTypes";

export const getShopItems =
  () =>
  async (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    dispatch({ type: actions.GET_ITEMS_START });
    try {
      const shopItems = await firestore.collection("bathbombs");
      shopItems.onSnapshot((snapshot) => {
        let items = [];
        snapshot.docs.forEach((doc) => {
          items.push({
            id: doc.id,
            name: doc.data().name,
            price: doc.data().price,
            img: doc.data().img,
            color: doc.data().color,
            about: doc.data().about
          });
        });
        dispatch({ type: actions.GET_ITEMS_SUCCESS, payload: items });
      });
    } catch (e) {
      dispatch({ type: actions.GET_ITEMS_FAIL, payload: e });
    }
  };
