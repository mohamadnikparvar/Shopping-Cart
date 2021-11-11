import React from 'react';
import { Link } from 'react-router-dom';

// components
import Card from './shared/Card';

// context
import { CardContext } from '../context/CardContextProvider';
import { useContext } from 'react';

// styles
import styles from "./ShopCard.module.css"

const ShopCard = () => {

    const {state, dispatch} = useContext(CardContext)

    return (
        <div className={styles.container}>
            <div className={styles.cartContainer}>
                {state.selectedItems.map(item => <Card key={item.id} data={item}/>)}
            </div>
            {
                state.itemsCounter > 0 && <div className={styles.payments}>
                    <p><span>Total Items:</span> {state.itemsCounter}</p>
                    <p><span>Total Payments:</span> {state.total}</p>
                    <div className={styles.buttonContainer}>
                        <button className={styles.clear} onClick={() => dispatch({type:"CHECKOUT"})}>Checkout</button>
                        <button className={styles.checkout} onClick={() => dispatch({type:"CLEAR"})}>Clear</button>
                    </div>
                </div>
            }
            {
                state.checkout && <div className={styles.complete}>
                    <h3>Checked out successfully</h3>
                    <Link to="/products">
                    Buy more!
                    </Link>     
                </div>
            }

            {
                !state.checkout && state.itemsCounter === 0 && <div className={styles.complete} >
                    <h3>Buy New Item?!</h3>
                    <Link to="/products">
                    Back to Shop
                    </Link>     
                </div>
            }
        </div>
    );
};

export default ShopCard;