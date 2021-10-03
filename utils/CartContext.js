import React, { useState } from 'react';
import Cookies from 'js-cookie';

export const CartContext = React.createContext();

export const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState(
    Cookies.get('cartItems') ? JSON.parse(Cookies.get('cartItems')) : []
  ); //initial state
  const [loggedIn, setLoggedIn] = useState(
    Cookies.get('userAuthToken') ? JSON.parse(Cookies.get('userAuthToken')) : []
  );

  React.useEffect(() => {
    Cookies.set('cartItems', JSON.stringify(cartItems), { expires: 1 });
    Cookies.set('userAuthToken', JSON.stringify(loggedIn), { expires: 365 });
  }, [cartItems, loggedIn]);

  return (
    <CartContext.Provider
      value={[cartItems, setCartItems, loggedIn, setLoggedIn]}
    >
      {props.children}
    </CartContext.Provider>
  );
};
