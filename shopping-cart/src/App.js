import './App.css';
import {Route,Redirect , Switch} from "react-router-dom"

// Context
import ProductContextProvider from './context/ProductContextProvider';
import CardContextProvider from './context/CardContextProvider';
// Components
import Store from './components/Store';
import ProductDetails from './components/ProductDetails';
import Navbar from './components/shared/Navbar';
import ShopCard from './components/ShopCard';

function App() {
  return (
    <ProductContextProvider >
      <CardContextProvider>
        <Navbar/>
      <Switch>
        <Route path="/products/:id" component={ProductDetails}/>
        <Route path="/products" component={Store}/>
        <Route path="/card" component={ShopCard}/>
        <Redirect to="/products"/>
      </Switch>
      </CardContextProvider>
    </ProductContextProvider>
  );
}

export default App;
