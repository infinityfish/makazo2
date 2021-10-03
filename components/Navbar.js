import React from 'react';
import Link from 'next/link';
import { CartContext } from '../utils/CartContext';

function Navbar() {
  const [cartItems] = React.useContext(CartContext);
  return (
    <div>
      <Link href="/cart">
        <a>Cart: ({cartItems.length})</a>
      </Link>
    </div>
  );
}
export default Navbar;
