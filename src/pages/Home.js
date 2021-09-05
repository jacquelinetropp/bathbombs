import React from "react";
import { Fragment } from "react";
import Intro from "../components/Intro/Intro";
import IntroCard from "../components/IntroCard/IntroCard";
import Button from '../components/Form/Button';
import {connect} from 'react-redux';
import * as actions from '../store/actions';

const Home = () => {
  return (
    <Fragment>
      <Intro />
        <IntroCard />
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
    test: actions.signUp
}


export default connect(null, mapDispatchToProps)(Home);
