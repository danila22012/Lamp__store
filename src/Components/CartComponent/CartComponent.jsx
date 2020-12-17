import React, { useState } from 'react';
import styles from "./styles.scss";
import { NavLink } from "react-router-dom";
import { ReactComponent as CartEmpty } from "../../Assets/CartEmpty.svg";
import { ReactComponent as SendedCart } from "../../Assets/SendedCart.svg";
import { ReactComponent as Close } from "../../Assets/Close.svg";
import { ReactComponent as Minus } from "../../Assets/Minus.svg";
import { ReactComponent as Plus } from "../../Assets/Plus.svg";

export const CartComponent = ({ cartProducts, addProductToCart, deleteProductFromCart, cutProductFromCart, destroyCart }) => {


    const host = 'https://morgan-shop.herokuapp.com/'
    const [isSended, setisSended] = useState(false) // костыль из-за класов, больше не использовать классы, только хуки
    let sssss = isSended

    let sum = 0
    return (



        <div className="cart">

            {sssss ?
                <>
                    <div className="cart__title">thank you</div>
                    <div className=" cart__empty">
                        <SendedCart className="cart__empty-img" />

                        <p className="cart__empty-caption">Your ordering is completely successful</p>

                        <p className="cart__empty-subCaption">We'll let you know when it ships and it headed your way.</p>
                        <div className="cart__empty-details">
                            <p className="cart__empty-details-order"> <span className="cart__empty-details-order--gray">Order:</span>0844253425</p>
                            <p className="cart__empty-details-date"> <span className="cart__empty-details-date--gray">Date order:</span>07/12/20</p>


                        </div>
                        <NavLink className="cart__empty-btn--white btn" to="/home">continue shoping</NavLink>

                    </div></> :
                <>
                    <div className="cart__title">basket</div>
                    <div className="cart__content">

                        {cartProducts.length !== 0 ?
                            <>


                                <div className="cart__products">

                                    {cartProducts.map(el => {

                                        return (
                                            <div key={el.id} className="cart__item">
                                                <div className="cart__img"  >
                                                    <img src={host + el.image} alt="" />
                                                </div>
                                                <div className="cart__descr">
                                                    <div className="cart__name">
                                                        <div className="cart__name-name">
                                                            <p>{el.name}</p>
                                                        </div>
                                                        <Close onClick={() => deleteProductFromCart(el)} className="cart__name-close" alt="cross" />
                                                    </div>
                                                    <div className="cart__quantity-container">
                                                        <div className="cart__quantity">
                                                            <p className="cart__quantity-caption">Quantity</p>
                                                            <div className="cart__quantity-btns">
                                                                <div className="cart__quantity-less"><Minus onClick={() => cutProductFromCart(el)} /></div>
                                                                <div className="cart__quantity-counter"><p>{el.counter}</p></div>

                                                                <div className="cart__quantity-more"><Plus onClick={() => addProductToCart(el)} /></div>
                                                            </div>
                                                        </div>
                                                        <p className="cart__quantity-price">
                                                            <span>${el.counter * el.price}</span>
                                                        </p>
                                                    </div>

                                                </div>
                                            </div>)
                                    })}

                                </div>
                                <div className="cart__summary">
                                    <p className="cart__summary-title">Order Summary</p>
                                    {cartProducts.map(el => {
                                        sum += el.counter * el.price
                                        return (
                                            <div key={el.id} className="cart__summary-item">
                                                <p className="cart__summary-item-name">{el.name}</p>
                                                <p className="cart__summary-item-price">${el.counter * el.price}</p>
                                            </div>
                                        )

                                    })}
                                    <div className="cart__summary-delivery">
                                        <p className="cart__summary-delivery-delivery">Express Delivery</p>
                                        <p className="cart__summary-delivery-price">$10</p>
                                    </div>
                                    <div className="cart__summary-total">
                                        <p className="cart__summary-total-capture">Estimated Total</p>
                                        <p className="cart__summary-total-price">${sum}</p>
                                    </div>

                                    <button onClick={() => {
                                        setisSended(true)
                                        destroyCart()
                                        console.log(isSended)
                                    }} className="cart__summary-submit btn"
                                    >
                                        CHECKOUT
                    </button>
                                </div>
                            </> :
                            <div className=" cart__empty">
                                <CartEmpty className="cart__empty-img" />

                                <p className="cart__empty-caption">Your basket is empty</p>

                                <NavLink className="cart__empty-btn btn" to="/home">START SHOPPING</NavLink>

                            </div>
                        }

                    </div>
                </>}


        </div>
    )
}