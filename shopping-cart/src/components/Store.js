import React, { useEffect }  from 'react';
// import { useContext } from "react"

// redux
import { useSelector,useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/products/productsAction';

// components
import Product from './shared/Product';

// context
// import { ProductsContext } from '../context/ProductContextProvider';

// Styles
import styles from "./Store.module.css"

const Store = () => {

    // const products = useContext(ProductsContext)
    const dispatch = useDispatch()
    const productsState = useSelector(state => state.productsState)

    useEffect(() => {
       if(!productsState.products.length) dispatch(fetchProducts())
    },[])
    return (
        <div className={styles.container}>
            {/* {products.map(product => <Product key={product.id} productData={product}/>)} */}
            {
                productsState.loading ? 
                <h2>Loading...</h2>:
                productsState.error ?
                <p>something went wrong</p>:
                productsState.products.map(product => <Product 
                key={product.id}
                productData={product}/>)
            }
        </div>
    );
};

export default Store;