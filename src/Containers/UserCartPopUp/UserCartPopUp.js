import React, { Component } from 'react';
import { connect } from 'react-redux'

import { CartPopUp } from "../../Components/CartPopUp/CartPopUp";


class UserCartPopUp extends Component {

    render() {


        console.log(this.props);

        return (
            <CartPopUp cartProducts={this.props.cartProducts.cartProducts}/>
        );
    }
}
const mapStateToProps = (state) => ({
    cartProducts: state.productToCartReducer
})

export default connect(mapStateToProps, null)(UserCartPopUp)