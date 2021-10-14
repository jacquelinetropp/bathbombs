import React, { useEffect } from "react";
import { connect } from "react-redux";
import ItemCard from "../components/ItemCard/ItemCard";
import styled from "styled-components";

import * as actions from "../store/actions";

const Wrapper = styled.div`
  margin-top: 12rem;
  text-align: center;
  font-size: 2.5rem;
`;

const Merch = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(3, 1fr);
  padding: 2rem;
`;

const Shop = ({ getShopItems, items, loading }) => {
  useEffect(() => {
    getShopItems();
  }, []);

  let content;

  if (loading || !items) {
    content = <div>loading...</div>;
  } else {
    content = items.map((item) => <ItemCard item={item} key={item.id} />);
  }

  return (
    <Wrapper>
      <h1>Our Bath Bombs </h1>
      <Merch>{content}</Merch>
    </Wrapper>
  );
};

const mapStateToProps = ({ items }) => ({
  items: items.items,
  loading: items.loading,
});

const mapDispatchToProps = {
  getShopItems: actions.getShopItems,
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
