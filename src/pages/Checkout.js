import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import * as actions from '../store/actions';
import CheckoutItem from '../components/CheckoutItem/CheckoutItem';
import {cartItemTotal} from '../store/cart/cartUtils';

const Wrapper = styled.div`
    margin-top: 10rem;
   text-align: center;
`;

const Items = styled.div`
    width: 75%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
`;

const Total = styled.div`
    display: flex;
    justify-content: center;
    width: 75%;
`

const Checkout = ({items}) => {
    const total = cartItemTotal(items);
    console.log(total);
    return (
        <Wrapper>
           <h1>Checkout</h1>
           <Items>
           {items ? (
               items.map(item => (
                   <CheckoutItem item={item} key={item.id} />
               ))
           ) : (
               <div>no items </div>
           )}
           </Items>
           <Total>
                Total: ${cartItemTotal(items)}
           </Total>
        </Wrapper>
    )
}

const mapStateToProps = ({cart}) => ({
    items: cart.cartItems
})


export default connect(mapStateToProps)(Checkout);
