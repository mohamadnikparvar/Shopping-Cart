import React,{ useContext } from 'react';
import { Link } from 'react-router-dom';

// context
import { CardContext } from '../../context/CardContextProvider';

// icons
import shopIcon from "../../assets/icons/shop.svg"



const Navbar = () => {

    const {state} = useContext(CardContext)

    return (
        <div>
            <Link to="/products">Products</Link>
            <div>
                <Link to="/card">
                <img src={shopIcon} alt="shop"/>
                </Link>
                <span>{state.itemsCounter}</span>
            </div>   
        </div>
    );
};

export default Navbar;