import React, {useState} from "react";
import { connect } from "react-redux";
import {
  Packaged,
  RemoveOrder,
  SentPackage,
  UnPackaged,
  UnsentPackage,
} from "../styles/Icons";
import SingleOrderItem from "./SingleOrderItem";
import * as actions from "../../store/actions";
import {Wrapper, Name, Address, Items, ButtonsDiv, FlexBox} from './SingleOrder.styles';
import DeleteOrder from "../DeleteOrder/DeleteOrder";

const SingleOrder = ({ order, orderStatusChange }) => {
  const [deleting, setDeleting] = useState(false);
  return (
    <Wrapper>
      <Name>{order.name}</Name>
      <Address>Address: {order.address}</Address>
      <Items>
        {order.items.map((item) => (
          <SingleOrderItem key={item.id} item={item} />
        ))}
      </Items>
      <ButtonsDiv>
        <FlexBox>
          Packaged:
          {order.packaged ? (
            <Packaged
              onClick={() =>
                orderStatusChange(order.id, order.packaged, "packaged")
              }
            />
          ) : (
            <UnPackaged
              onClick={() =>
                orderStatusChange(order.id, order.packaged, "packaged")
              }
            />
          )}
        </FlexBox>
        <FlexBox>
          Sent:
          {order.sent ? (
            <SentPackage
              onClick={() => orderStatusChange(order.id, order.sent, "sent")}
            />
          ) : (
            <UnsentPackage
              onClick={() => orderStatusChange(order.id, order.sent, "sent")}
            />
          )}
        </FlexBox>
        <FlexBox>
          Remove Order:
          <RemoveOrder onClick={() => setDeleting(true)}/>
        </FlexBox>
      </ButtonsDiv>
      {deleting ? (
        <DeleteOrder order={order.id} close={() => setDeleting(false)} />
      ) : ""}
    </Wrapper>
  );
};

const mapDispatchToProps = {
  orderStatusChange: actions.orderStatusChange,
};

export default connect(null, mapDispatchToProps)(SingleOrder);
