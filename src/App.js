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
import Checkout from "./pages/Checkout";
import Admin from "./pages/Admin";
import About from "./pages/About";

const Page = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 95vh;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  min-height: 100vh;
`

function App({ authenticated, admin }) {
  let routes;

  if (authenticated) {
    if (admin === "admin") {
        routes = (
          <Page>
              <Route exact path="/" component={Admin} />
          </Page>
        )
    } else {
      routes = (
        <div>
          <Page>
            <Route exact path="/" component={Home} />
            <Route exact path="/shop" component={Shop} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/about" component={About} />
          </Page>
        </div>
      );
    }
  } else {
    routes = (
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={SignUp} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/checkout" component={Checkout} />
        <Route path="/login" component={Login} />
        <Route exact path="/about" component={About} />
      </div>
    );
  }

  return (
    <Wrapper>
      <Navbar />
      <Switch>{routes}</Switch>
      <Footer />
    </Wrapper>
  );
}

const mapStateToProps = ({ firebase }) => ({
  authenticated: firebase.auth.uid,
  admin: firebase.profile.firstName,
});

export default connect(mapStateToProps)(App);
