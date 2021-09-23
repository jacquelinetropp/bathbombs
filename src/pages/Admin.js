import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions";
import styled from "styled-components";
import SingleOrder from "../components/SingleOrder/SingleOrder";

const Wrapper = styled.div`
  max-width: 1200px;
  width: 90%;
  margin: 10rem auto 0 auto;
`;

const Admin = ({ getOrders, orders, loading }) => {
  useEffect(() => {
    getOrders();
  }, []);

  let content;
  if (loading || !orders) {
    content = <div>Loading...</div>;
  } else if (orders.length === 0) {
    content = <div>No orders yet</div>;
  } else if (orders && !loading) {
    content = orders.map((order) => (
      <SingleOrder order={order} key={order.id} />
    ));
  }

  return (
    <Wrapper>
      {content}
    </Wrapper>
  );
};

const mapStateToProps = ({ orders }) => ({
  orders: orders.orders,
  loading: orders.loading,
});

const mapDispatchToProps = {
  getOrders: actions.getOrders,
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
