import React from 'react';
import styles from './styles.scss'
import { ReactComponent as NotFound404 } from "../../Assets/NotFound404.svg";
import { NavLink } from "react-router-dom";

export const NotFound = () => {

    return (
        <div className="not-found">
            <NotFound404 className="not-found__img" />
            <p className="not-found__title">Sorry, we can't find this page</p>
            <div className="not-found__btn"><NavLink to='/home' >HOME PAGE</NavLink></div>
        </div>

    )
}