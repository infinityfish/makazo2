import React from 'react';

function ProductsData() {
  const [isLoading, setLoading] = React.useState(true);
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:8000/products/api/products/')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [data]);

  return isLoading ? 'Loading...' : data;
}
export default ProductsData;