import * as actions from "./orderTypes";

export const getOrders =
  () =>
  async (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();

    dispatch({ type: actions.GET_ORDERS_START });
    try {
      const ordersList = await firestore.collection("orders");

      ordersList.onSnapshot((snapshot) => {
        let orders = [];

        snapshot.docs.forEach((doc) => {
          orders.push({
            id: doc.id,
            user: doc.data().user,
            name: doc.data().firstName + doc.data().lastName,
            address: doc.data().address,
            items: doc.data().items,
          });
        });
        dispatch({ type: actions.GET_ORDERS_SUCCESS, payload: orders });
      });
    } catch (err) {
      dispatch({ type: actions.GET_ORDERS_FAIL, payload: err });
    }
  };
