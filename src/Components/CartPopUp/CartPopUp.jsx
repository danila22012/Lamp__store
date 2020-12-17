import React from 'react';
import styles from "./styles.scss";
import { NavLink } from "react-router-dom";


export const CartPopUp = ({ cartProducts }) => {
    const host = 'https://morgan-shop.herokuapp.com/'
    console.log(cartProducts);
    return (
        <div className="cart-popUp">
            {cartProducts.map(el => {


                return (<div key={el.id} className="cart-popUp__item">
                    <div className="cart-popUp__item__img"  >
                        <img src={host + el.image} alt="" />
                    </div>
                    <div className="cart-popUp__item__descr">
                        <p className="cart-popUp__item__title">
                            {el.name}
                        </p>
                        <p className="cart-popUp__item__price">
                            {el.counter} x ${el.price}
                        </p>
                    </div>
                </div>)



            })}

            <div className="cart-popUp__btn-container">
                <NavLink className="cart-popUp__btn-to-cart" to='/card-list'>go to checkput</NavLink>
            </div>


        </div>
    )
}