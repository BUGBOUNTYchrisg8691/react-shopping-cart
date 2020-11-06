import React, { useState, useEffect, useReducer } from "react";
import { Route } from "react-router-dom";
import data from "./data";

// Contexts
import ProductContext from "./contexts/ProductContext";
import CartContext from "./contexts/CartContext";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

// Hooks
import useLocalStorage from "./hooks/useLocalStorage";

// Reducer and Initial State
import reducer, { initialState } from "./store/reducers";

// Actions Creators
import { addItemAC, removeItemAC, getFromStorage } from "./store/actions";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [storage, setStorage] = useLocalStorage("cart");

  const { products, cart } = state;

  useEffect(() => {
    dispatch(getFromStorage(storage));
  }, []);

  useEffect(() => {
    setStorage(cart);
  }, [cart]);

  const addItem = (item) => {
    // add the given item to the cart
    dispatch(addItemAC(item));
  };

  const removeItem = (id) => {
    dispatch(removeItemAC(id));
  };

  return (
    <div className="App">
      <CartContext.Provider value={{ cart }}>
        <Navigation />
      </CartContext.Provider>

      {/* Routes */}
      <ProductContext.Provider value={{ products, addItem }}>
        <Route exact path="/">
          <Products />
        </Route>
      </ProductContext.Provider>

      <CartContext.Provider value={{ cart, removeItem }}>
        <Route path="/cart">
          <ShoppingCart />
        </Route>
      </CartContext.Provider>
    </div>
  );
}

export default App;
