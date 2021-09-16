import * as actions from "./userTypes";

export const signUp =
  (data) =>
  async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    dispatch({ type: actions.AUTH_START });
    try {
      const res = await firebase
        .auth()
        .createUserWithEmailAndPassword(data.email, data.password);

      await firestore.collection("users").doc(res.user.uid).set({
        firstName: data.firstName,
        lastName: data.lastName,
        address: data.street + " " + data.city + " " + data.state + " "+ data.zipcode
      });
      dispatch({ type: actions.AUTH_SUCCESS });
    } catch (err) {
      dispatch({ type: actions.AUTH_FAIL, payload: err.message });
    }
    dispatch({ type: actions.AUTH_END });
  };

export const signOut =
  () =>
  async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    try {
      await firebase.auth().signOut();
    } catch (err) {}
  };

export const signIn =
  (data) =>
  async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    dispatch({ type: actions.AUTH_START });
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(data.email, data.password);
      dispatch({ type: actions.AUTH_SUCCESS });
    } catch (err) {
      dispatch({ type: actions.AUTH_FAIL, payload: err.message });
    }
    dispatch({ type: actions.AUTH_END });
  };

export const addItemToUser =
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
        address
      };

      await firestore.collection("orders").add(order);

      dispatch({ type: actions.ADD_ORDER_SUCCESS });
    } catch (err) {
      dispatch({ type: actions.ADD_ORDER_FAIL, payload: err });
      console.log(err);
    }
  };
