import React, { useEffect, useState } from 'react';
import styles from "./styles.scss";
import { ReactComponent as Add } from "../../Assets/Add.svg";



export const ShowLamps = ({ props, addProductToCart, deleteProductFromCart, cutProductFromCart }) => {

    const host = 'https://morgan-shop.herokuapp.com/'



    return (
        <>

            <div className="home-products">
                {props.map(el => {

                    return (
                        <div key={el.id} className="product-item">
                            <img className="product-item__img" src={host + el.image} alt="item" />
                            <div className="product-item__info">
                                <p className="product-item__name">{el.name} </p>
                                <p className="product-item__price">${el.price} </p>
                            </div>

                            {/* //через класы затоглить условие */}
                            <div onClick={({ target }) => {

                                if (target.className == 'add-product-btn') {

                                    addProductToCart(el)
                                    target.className = "add-product-btn add-product-btn--pressed"
                                }
                                else {
                                    cutProductFromCart(el)
                                    target.className = "add-product-btn"
                                }
                            }}
                                className="add-product-btn"></div>
                        </div>
                    )


                })}
            </div>
            <div className="show-more">
                <button className="show-more__btn">Show more</button>
                </div>


        </>
    )
}