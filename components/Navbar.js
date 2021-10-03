import React from 'react';
import Link from 'next/link';
import { CartContext } from '../utils/CartContext';

function Navbar() {
  const [cartItems, loggedIn] = React.useContext(CartContext);
  return (
    <div>
      <Link href="">
        <a>Makazo</a>
      </Link>{' '}
      |{' '}
      <Link href="/cart">
        <a>CartItems: ({cartItems.length})</a>
      </Link>
      |{' '}
      <Link href="/login">
        <a>Login</a>
      </Link>
    </div>
  );
}
export default Navbar;
