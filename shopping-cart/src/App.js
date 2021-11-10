import './App.css';
import {SwitchCase, Route,Rdirect ,Redirect , Switch} from "react-router-dom"

// Context
import ProductContextProvider from './context/ProductContextProvider';
// Components
import Store from './components/Store';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <ProductContextProvider >
      <Switch>
      <Route path="/products/:id" component={ProductDetails}/>
        <Route path="/products" component={Store}/>
        <Redirect to="/products"/>
      </Switch>
    </ProductContextProvider>
  );
}

export default App;
