import React, { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import styled from "styled-components";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/Footer";
import SignUp from "./pages/auth/SignUp";
import { connect } from "react-redux";
import Login from "./pages/auth/Login";
import Shop from "./pages/Shop";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;

function App({ authenticated }) {
  let routes;

  if (authenticated) {
    routes = (
      <Fragment>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />
      </Fragment>
    );
  } else {
    routes = (
      <Fragment>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
      </Fragment>
    );
  }

  return (
    <Fragment>
      <Navbar />
      <Switch>{routes}</Switch>
      <Footer />
    </Fragment>
  );
}

const mapStateToProps = ({ firebase }) => ({
  authenticated: firebase.auth.uid,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps)(App);
