import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import styles from "./styles.scss";


import { ReactComponent as Logo } from "../../Assets/Logo.svg";
import { ReactComponent as Search } from "../../Assets/ic_search.svg";
import { ReactComponent as Cart } from "../../Assets/Cart.svg";
import { ReactComponent as User } from "../../Assets/ic_user.svg";
import { ReactComponent as BurgerMenu } from "../../Assets/BurgerMenu.svg";

import UserCartPopUp from "../../Containers/UserCartPopUp/UserCartPopUp";


export const TopBar = ({ categories, cartProducts }) => {


    const tempArr = categories.sort((a, b) => {
        return a.menuOrder - b.menuOrder
    })

    const [openModal, setOpenModal] = useState(false);
    const [openBurger, setOpenbirger] = useState(false);


    return (
        <>
            {openBurger ? <ul className="burger-menu list">
                {tempArr.map(el => <li key={el.id} className="burger-menu__item"> <NavLink onClick={()=>setOpenbirger(false)} to={el.alias} className="list__link">{el.title}</NavLink> </li>)}
            </ul> : null}
            <div className="top-bar__container">
                <div className="top-bar">

                    <nav className="top-bar__nav nav">

                        <div className="logo">
                            <NavLink to='/home'><Logo /></NavLink>

                        </div>
                        <BurgerMenu onClick={()=>setOpenbirger(true)} className="burger-menu" />

                        <ul className="top-bar__list list">
                            {tempArr.map(el => <li key={el.id} className="list__item"> <NavLink to={el.alias} activeClassName="list__link--pressed" className="list__link">{el.title}</NavLink> </li>)}
                        </ul>

                    </nav>
                    <div className="top-bar__info">

                        <div id="search" className="top-bar__item"><NavLink className="top-bar__link" activeClassName="top-bar__item--pressed" to='/search'><Search /></NavLink></div>
                        <div className="top-bar__item"><NavLink className="top-bar__link" activeClassName="top-bar__item--pressed" to='/user-profile'><User /></NavLink></div>
                        <div className="top-bar__item"
                            onClick={openModal ? () => { setOpenModal(false) } : () => setOpenModal(true)}


                        >{openModal ? <UserCartPopUp /> : null}
                            <NavLink activeClassName="top-bar__item--pressed" className="top-bar__link top-bar__link--disabled-link" to='/card-list'><Cart />{cartProducts.length}</NavLink>
                            </div>




                    </div>

                </div>
            </div>
            <div className="modal_close" onClick={() => setOpenModal(false)}></div>
        </>
    )
};