import React from 'react';
import { Component } from "react";
import { connect } from "react-redux";
import { ShowLamps } from "../../Components/ShowLamps/ShowLamps";

import { Select, MenuItem } from '@material-ui/core';
import { OverlayCategories } from "../../Components/OverlayCategories/OverlayCategories";

import { addProductToCart } from "../../Actions/Actions";
import { deleteProductFromCart, cutProductFromCart } from "../../Actions/Actions";

class UserHomePage extends Component {




    componentDidUpdate() {
        if (this.state.tempArr.length === 0 && this.props.products.products.length != 0) {
            this.setState({ tempArr: this.props.products.products.slice(0, this.state.amountOfELements) })


        }

    }
    componentDidMount() {
        if (this.state.tempArr.length === 0 && this.props.products.products.length != 0) {
            this.setState({ tempArr: this.props.products.products.slice(0, this.state.amountOfELements) })


        }

    }

    constructor() {
        super()
        this.state = {
            tempArr: [],
            amountOfELements: 12,
            elementIncrement: 12,
            sortValue:'newness'
        }
    }


    sortTempArr = (el) => {


        const tempArr = [...this.state.tempArr]

        tempArr.sort((a, b) => {

            switch (el.target.value) {
                case 'newness':
                    return new Date(b.timeStamp) - new Date(a.timeStamp);

                case "lowToHigh":
                    return a.price - b.price

                case "highToLow":
                    return b.price - a.price
                default:
                    break
            }
        })
        this.setState({ tempArr: tempArr })
    }

    showMore = () => {
        this.setState({
            tempArr: this.props.products.products.slice(0, this.state.tempArr.length + this.state.elementIncrement),

        })

    }
    showLess = () => {
        console.log(this);
        this.setState({ tempArr: this.props.products.products.slice(0, this.state.amountOfELements) })
    }


    render() {  

    
        return (
            <>
                <OverlayCategories props={this.props.category.categoriesCont} />

                <div className="product-sort">
                    <label> sort by:
                        <Select className="product-sort__sort"  value={this.state.sortValue} onChange={this.sortTempArr}>
                            <MenuItem value="newness">Newness</MenuItem>
                            <MenuItem value="lowToHigh">Price low to high</MenuItem>
                            <MenuItem value="highToLow">Price high to low</MenuItem>
                        </Select>
                    </label>
                </div>



                <ShowLamps props={this.state.tempArr}
                    addProductToCart={this.props.addProductToCart}
                    deleteProductFromCart={this.props.deleteProductFromCart}
                    cutProductFromCart={this.props.cutProductFromCart}
                    showLess={this.showLess}
                    showMore={this.showMore}
                    allProducts = {this.props.products.products}
                    

                />
               
            </>
        );

    }
}
const mapStateToProps = (state) => {

    return ({
        category: state.categoryReducer,
        products: state.productsReducer,

    })

}
const mapDispatchToProps = (dispatch) => {

    return ({

        addProductToCart: payload => (dispatch(addProductToCart(payload))),
        deleteProductFromCart: payload => (dispatch(deleteProductFromCart(payload))),
        cutProductFromCart: payload => (dispatch(cutProductFromCart(payload))),


    })
}

export default connect(mapStateToProps, mapDispatchToProps)(UserHomePage)