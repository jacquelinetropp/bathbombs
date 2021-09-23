import * as actions from "./orderTypes";

export const completeOrderCheckout =
  (cartItems) =>
  async (dispatch, getState, { getFirestore }) => {
    const userId = getState().firebase.auth.uid;
    const firestore = getFirestore();
    const firstName = getState().firebase.profile.firstName;
    const lastName = getState().firebase.profile.lastName;
    const address = getState().firebase.profile.address;

    dispatch({ type: actions.ADD_ORDER_START });
    try {
      const order = {
        user: userId,
        items: cartItems,
        firstName,
        lastName,
        address,
        packaged: false,
        sent: false,
      };

      await firestore.collection("orders").add(order);

      dispatch({ type: actions.ADD_ORDER_SUCCESS });
    } catch (err) {
      dispatch({ type: actions.ADD_ORDER_FAIL, payload: err });
      console.log(err);
    }
  };

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
            packaged: doc.data().packaged,
            sent: doc.data().sent,
          });
        });
        dispatch({ type: actions.GET_ORDERS_SUCCESS, payload: orders });
      });
    } catch (err) {
      dispatch({ type: actions.GET_ORDERS_FAIL, payload: err });
    }
  };

export const orderStatusChange =
  (id, state, action) =>
  async (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();

    dispatch({ type: actions.CHANGE_ORDER_START });
    try {
      if (action == "sent") {
        await firestore.collection("orders").doc(id).update({
          sent: !state,
        });
      } else if (action === "packaged") {
        await firestore.collection("orders").doc(id).update({
          packaged: !state,
        });
      }
      dispatch({ type: actions.CHANGE_ORDER_SUCCESS });
    } catch (err) {
      dispatch({ type: actions.CHANGE_ORDER_FAIL, payload: err });
    }
  };

  export const deleteOrder = (id) => async(dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();

    dispatch({type: actions.DELETE_ORDER_START});
    try {

      await firestore.collection("orders").doc(id).delete();

      dispatch({type: actions.DELETE_ORDER_SUCCESS});
    } catch(err) {
      dispatch({type: actions.DELETE_ORDER_FAIL, payload: err})
    }
  }
