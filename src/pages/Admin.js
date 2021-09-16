import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions';
import styled from 'styled-components';

const Wrapper = styled.div`
    max-width: 1200px;
    width: 90%;
    margin: 10rem auto 0 auto;
`


const Admin = ({getOrders}) => {
    useEffect(() => {
       getOrders();
    }, []);

    return (
        <Wrapper>
            admin
        </Wrapper>
    )
}

const mapStateToProps = ({orders}) => ({
    orders: orders.orders
})

const mapDispatchToProps = {
    getOrders: actions.getOrders
}


export default connect(mapStateToProps, mapDispatchToProps)(Admin);
