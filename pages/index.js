import React from 'react';
import { useQuery } from 'react-query';
import Cookies from 'js-cookie';
import { CartContext } from '../utils/CartContext';

// import Product from '../components/Product';
function Home(props) {
  const [cartItems, setCartItems] = React.useContext(CartContext);
  const { isLoading, error, data } = useQuery('productsListData', () =>
    fetch('http://localhost:8000/products/api/products/').then((res) =>
      res.json()
    )
  );
  if (isLoading) return 'Loading...';
  if (error) return 'An error has occurred: ' + error.message;

  // const { onAdd } = props;
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
      // setCartItems([...cartItems, ...product]); //when dealing with unique products like NFTs
    }
    Cookies.set('cartItems', JSON.stringify(cartItems), { expires: 30 });
  };

  return (
    //
    <>
      <h2>Products</h2>
      <div className="row">
        {data.map((product) => (
          <div>
            <img
              className="small"
              src={product.image}
              alt={product.name}
              width="300"
              height="300"
            />
            <h3>{product.name}</h3>
            <div>${product.price}</div>
            <div>
              <button onClick={() => onAdd(product)}>Add To Cart</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default Home;
