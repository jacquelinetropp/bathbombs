import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import styled from "styled-components";
import { DotIcon } from "../styles/Icons";
import PopularItemCard from "../PopularItemCard/PopularItemCard";

const Wrapper = styled.div`
  background-color: var(--color-mainDark);
  padding-top: 6rem;
  margin-top: -2rem;
`;

const Header = styled.h2`
  font-size: 4rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
`;

const ItemsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    padding: 2rem;

    @media only screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 3rem;
    }
`

const PopularItems = ({ items, loading, getItems }) => {
  useEffect(() => {
    getItems();
  }, []);

  let content;
  if (loading && !items) {
    content = <div>Loading...</div>;
  } else if (items) {
    const slicedItems = items.slice(0, 3);
    content = slicedItems.map((item) => <PopularItemCard key={item.id} item={item} />);
  }

  return (
    <Wrapper>
      <Header>
        <DotIcon /> Popular Products <DotIcon />
      </Header>
      <ItemsWrapper>
      {content}
      </ItemsWrapper>
    </Wrapper>
  );
};

const mapStateToProps = ({ items }) => ({
  items: items.items,
  loading: items.loading,
});

const mapDispatchToProps = {
  getItems: actions.getShopItems,
};

export default connect(mapStateToProps, mapDispatchToProps)(PopularItems);
