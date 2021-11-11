import React from 'react';
import { Link } from 'react-router-dom';

// components
import Card from './shared/Card';

// context
import { CardContext } from '../context/CardContextProvider';
import { useContext } from 'react';


const ShopCard = () => {

    const {state, dispatch} = useContext(CardContext)

    return (
        <div>
            <div>
                {state.selectedItems.map(item => <Card key={item.id} data={item}/>)}
            </div>
            {
                state.itemsCounter > 0 && <div>
                    <p><span>Total Items:</span> {state.itemsCounter}</p>
                    <p><span>Total Payments:</span> {state.total}</p>
                    <div>
                        <button onClick={() => dispatch({type:"CHECKOUT"})}>Checkout</button>
                        <button onClick={() => dispatch({type:"CLEAR"})}>Clear</button>
                    </div>
                </div>
            }
            {
                state.checkout && <div>
                    <h3>Checked out successfully</h3>
                    <Link to="/products">
                    Buy more!
                    </Link>     
                </div>
            }

            {
                !state.checkout && state.itemsCounter === 0 && <div>
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