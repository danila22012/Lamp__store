import React from 'react';
import styles from "./styles.scss";
import { NavLink } from "react-router-dom";


export const OverlayCategories = ({ props }) => {

    const host = 'https://morgan-shop.herokuapp.com/'
    console.log();
    return (
        <div className="category-overlay">

            {props.map(el => <div key={el.id} className="category-overlay__item">
                
                <NavLink to={`/${el.alias}`}>
                <img src={host + el.image} alt="image" />
                </NavLink>
                <div className={el.menuOrder == 3 ? 'category-overlay__item-title category-overlay__item-title--white' : 'category-overlay__item-title'}>
                        {el.alias}
                    </div>
            </div>)}

        </div>
    );

}