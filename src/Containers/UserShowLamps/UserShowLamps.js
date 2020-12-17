import React, { Component } from 'react';

import { connect } from "react-redux";
import { Select, MenuItem  } from '@material-ui/core';
import { ShowLamps } from "../../Components/ShowLamps/ShowLamps";
import { sortProductsInterior } from "../../Actions/Actions";
import { addProductToCart } from "../../Actions/Actions";
import { deleteProductFromCart, cutProductFromCart } from "../../Actions/Actions";

class UserShowLamps extends Component {



    //для того случая когда пользователь переходит с домашней страницы
    componentDidMount() {

        let pathName = ''

        

        if (this.props.category.categoriesCont.length !== 0) {

            

            let tempArr = this.props.category.categoriesCont.filter(el => el.alias === this.props.path)
            pathName = tempArr[0].id

            console.log(this.props.path);

            if (this.props.sortedProducts.length !== 0) {
                if (this.props.sortedProducts[0].categoryId !== pathName) {
                    this.props.sortProductsInterior(pathName)
                    if(this.state.tempArr.length !==0 ) this.setState({tempArr:[]})
                }
            }
            //  проверка, при смене страницы, 
            //  сверяю локальный путь, с путём обьекта в пропсе если не совпадает диспатчу новый адресс

            if (this.props.products.products.length !== 0 && this.props.sortedProducts.length === 0) {

                
                this.props.sortProductsInterior(pathName)
            }

        }

    }
    componentDidUpdate() {

        let pathName = ''



        if (this.props.category.categoriesCont.length !== 0) {

            

            let tempArr = this.props.category.categoriesCont.filter(el => el.alias === this.props.path)
            pathName = tempArr[0].id

            console.log(this.props.path);

            if (this.props.sortedProducts.length !== 0) {
                if (this.props.sortedProducts[0].categoryId !== pathName) {
                    this.props.sortProductsInterior(pathName)
                    if(this.state.tempArr.length !==0 ) this.setState({tempArr:[]})
                }
            }
            //  проверка, при смене страницы, 
            //  сверяю локальный путь, с путём обьекта в пропсе если не совпадает диспатчу новый адресс

            if (this.props.products.products.length !== 0 && this.props.sortedProducts.length === 0) {

                
                this.props.sortProductsInterior(pathName)
            }

        }

    }

    constructor() {
        super()
        this.state = {
            tempArr: [],
            isLoading:false,


        }
    }

    sortTempArr = (el) => {
        

        const tempArr = [...this.props.sortedProducts]

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



    render() {
        console.log(this.state.tempArr)
        console.log(this.props);
       

        return (
            <>

                <div className="product-sort">
                    <label> sort by:
                        <Select className="product-sort__sort" onChange={this.sortTempArr}>
                            <MenuItem value="newness">Newness</MenuItem>
                            <MenuItem value="lowToHigh">Price low to high</MenuItem>
                            <MenuItem value="highToLow">Price high to low</MenuItem>
                        </Select>
                    </label>
                </div>
                <ShowLamps props={this.state.tempArr.length <= 0 ? this.props.sortedProducts : this.state.tempArr} 
                addProductToCart={this.props.addProductToCart}
                deleteProductFromCart={this.props.deleteProductFromCart}
                cutProductFromCart={this.props.cutProductFromCart}
                
                />
            </>
        );
    }
}
const mapStateToProps = (state) => {

    return ({

        category: state.categoryReducer,
        products: state.productsReducer,
        sortedProducts: state.productsReducer.sortedProducts,
  

    })

}
const mapDispatchToProps = (dispatch) => {

    return ({
        sortProductsInterior: payload => (dispatch(sortProductsInterior(payload))),
        addProductToCart: payload =>(dispatch(addProductToCart(payload))),
        deleteProductFromCart:payload =>(dispatch(deleteProductFromCart(payload))),
        cutProductFromCart:payload =>(dispatch(cutProductFromCart(payload))),

    })
}

export default connect(mapStateToProps, mapDispatchToProps)(UserShowLamps)