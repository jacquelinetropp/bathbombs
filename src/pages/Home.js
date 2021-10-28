import React from "react";
import { Fragment } from "react";
import Intro from "../components/Intro/Intro";
import IntroCard from "../components/IntroCard/IntroCard";
import {connect} from 'react-redux';
import * as actions from '../store/actions';
import styled from 'styled-components';
import PopularItems from "../components/PopularItems/PopularItems";

const Page = styled.div`
  margin-top: 6.5rem;
`

const Home = () => {
  return (
    <Page>
      <Intro />
        <IntroCard />
        <PopularItems />
    </Page>
  );
};

const mapDispatchToProps = {
    test: actions.signUp
}


export default connect(null, mapDispatchToProps)(Home);
