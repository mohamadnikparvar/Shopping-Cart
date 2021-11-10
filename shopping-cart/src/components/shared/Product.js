import React , { useContext } from 'react';
import { Link } from 'react-router-dom';


// functions
import { shorten ,isInCard ,quantityCount } from '../../helper/function';

// context:
import { CardContext } from '../../context/CardContextProvider';

// Icons
import trashIcon from "../../assets/icons/trash.svg"


const Product = ({productData}) => {

    const {state,dispatch} = useContext(CardContext)

    return (
        <div>
            <img src={productData.image} alt="product"/>
            <h3>{shorten(productData.title)}</h3>
            <p>{productData.price}</p>
            <div>
                <Link to={`/products/${productData.id}`}>Detailes</Link>
                <div>
                    {quantityCount(state,productData.id) === 1 && <button onClick={()=>dispatch({type:"REMOVE_ITEM",payload:productData})}><img src={trashIcon} alt="trash"/></button>}
                    {quantityCount(state,productData.id) > 1 && <button onClick={()=>dispatch({type:"DECREASE",payload:productData})}>-</button>}
                    {
                        isInCard(state,productData.id)?
                        <button onClick={()=>dispatch({type:"INCREASE",payload:productData})}>+</button>:
                        <button onClick={()=>dispatch({type:"ADD_ITEM" ,payload:productData})}>Add to Cart</button>
                    }

                </div>
            </div>
        </div>
    );
};

export default Product;