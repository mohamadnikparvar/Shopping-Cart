import React,{ useContext } from 'react';
import { Link } from 'react-router-dom';

// context
import { CardContext } from '../../context/CardContextProvider';

// icons
import shopIcon from "../../assets/icons/shop.svg"

// styles
import styles from "./Navbar.module.css"

const Navbar = () => {

    const {state} = useContext(CardContext)

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