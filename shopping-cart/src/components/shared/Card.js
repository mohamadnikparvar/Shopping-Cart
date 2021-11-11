import React from 'react';
import { useContext } from 'react';

// context 
import  { CardContext } from '../../context/CardContextProvider';

// functions
import { shorten } from '../../helper/function';

// icons
import trashIcon from "../../assets/icons/trash.svg"

const Card = (props) => {

    const {image ,price ,quantity ,title} = props.data
    const {dispatch} = useContext(CardContext)

    return (
        <div>
            <img src={image} alt="product"/>
            <div>
                <h3>{shorten(title)}</h3>
                <p>{price} $</p>
            </div>
            <div>
                <span>{quantity}</span>
            </div>
            <div>
                {
                    quantity > 1 ?
                    <button onClick={() => dispatch({type:"DECREASE" , payload:props.data})}>-</button> :
                    <button onClick={() => dispatch({type:"REMOVE_ITEM" , payload:props.data})}>
                        <img src={trashIcon} alt ="trash"/>
                    </button>
                }
                <button onClick={() => dispatch({type:"INCREASE" , payload:props.data})}>+</button>
            </div>
        </div>
    );
};

export default Card;