import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import Home from "./pages/Home";

import { Provider } from "react-redux";
import store from "./store";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";
import firebase from "./firebase/firebase";
import theme from "./utils/theme";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Navbar />
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
    </ThemeProvider>
  );
}

export default App;
