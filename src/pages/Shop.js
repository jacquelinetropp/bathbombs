import React, { useEffect } from "react";
import { connect } from "react-redux";
import ItemCard from "../components/ItemCard/ItemCard";
import styled from 'styled-components';

import * as actions from "../store/actions";

const Page = styled.div`
    margin-top: 15rem;
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(3, 1fr);
    padding: 2rem;
`

const Shop = ({ getShopItems, items, loading }) => {
  useEffect(() => {
    getShopItems();
  }, []);

  let content;

  if (loading || !items) {
    content = <div>loading...</div>;
  } else {
    content = items.map((item) => (
      <ItemCard item={item} key={item.id}/>
    ));
  }

  return <Page>{content}</Page>;
};

const mapStateToProps = ({ items }) => ({
  items: items.items,
  loading: items.loading,
});

const mapDispatchToProps = {
  getShopItems: actions.getShopItems,
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
