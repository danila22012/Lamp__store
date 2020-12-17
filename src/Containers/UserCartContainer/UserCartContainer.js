import React, { Component } from 'react';
import { connect } from 'react-redux'
import { CartComponent } from "../../Components/CartComponent/CartComponent"; 
import { addProductToCart, deleteProductFromCart, cutProductFromCart, destroyCart } from "../../Actions/Actions";

class UserCartContainer extends Component {
    
    render() {
        return (
            <CartComponent cartProducts={this.props.cartProducts.cartProducts}   
            addProductToCart={this.props.addProductToCart}
            deleteProductFromCart={this.props.deleteProductFromCart}
            cutProductFromCart={this.props.cutProductFromCart}
            destroyCart={this.props.destroyCart}
           
            />
            
        );
    }
}
const mapStateToProps = (state) => ({
    cartProducts: state.productToCartReducer
})
const mapDispatchToProps = (dispatch) => ({
    addProductToCart: payload => (dispatch(addProductToCart(payload))),
    deleteProductFromCart: payload => (dispatch(deleteProductFromCart(payload))),
    cutProductFromCart: payload => (dispatch(cutProductFromCart(payload))),
    destroyCart: () => (dispatch(destroyCart())),
})

export default connect(mapStateToProps, mapDispatchToProps)(UserCartContainer)