import React from 'react';

import { Component } from "react";
import { connect } from "react-redux";
import { loadCategory, loadProducts } from '../../Actions/Actions'
import { TopBar } from "../../Components/TopBar/TopBar";




class UserCategoriesContainer extends Component {

    render() {
        return (
            <TopBar categories={this.props.categories.categoriesCont} cartProducts={this.props.cartProducts.cartProducts} />
        )

    }

};

const mapStateToProps = (state) => ({
    categories: state.categoryReducer,
    products: state.productsReducer,
    cartProducts: state.productToCartReducer,


})
const mapDispatchToProps = (dispatch) => ({

    loadCategory: dispatch(loadCategory()),
    loadProducts: dispatch(loadProducts())
})
export default connect(mapStateToProps, mapDispatchToProps)(UserCategoriesContainer);   