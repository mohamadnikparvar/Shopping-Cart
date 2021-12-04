import React from 'react';
import { Link } from 'react-router-dom';

// import { useContext } from 'react';


// context
// import { CardContext } from '../../context/CardContextProvider';

// redux
import { useSelector } from 'react-redux';

// icons
import shopIcon from "../../assets/icons/shop.svg"

// styles
import styles from "./Navbar.module.css"

const Navbar = () => {

    // const {state} = useContext(CardContext)
    const state = useSelector(state =>state.cartState)

    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
            <Link className={styles.productLink} to="/products">Products</Link>
            <div className={styles.iconContainer}>
                <Link to="/card">
                <img src={shopIcon} alt="shop"/>
                </Link>
                <span>{state.itemsCounter}</span>
            </div> 
            </div>  
        </div>
        
    );
};

export default Navbar;