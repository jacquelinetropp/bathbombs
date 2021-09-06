import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import userReducer from "./user/userReducer";
import itemsReducer from './items/itemsReducer';
import cartReducer from "./cart/cartReducer";


import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["cart"],
  };

const rootReducer = combineReducers({
    user: userReducer,
    items: itemsReducer,
    cart: cartReducer,
    firebase: firebaseReducer,
    firesore: firestoreReducer
});

export default persistReducer(persistConfig, rootReducer);
