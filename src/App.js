import React, {Fragment} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import styled from 'styled-components';
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/Footer";
import SignUp from "./components/auth/SignUp";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`

function App() {
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={SignUp} />
      </Switch>
      <Footer />
    </Fragment>
  );
}

export default App;
