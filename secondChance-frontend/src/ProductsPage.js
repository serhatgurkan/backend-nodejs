import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ProductsPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('/api/secondchance/items')
      .then(res => setItems(res.data));
  }, []);

  return (
    <div>
      <h1>All Products</h1>
      <ul>
        {items.map(item => (
          <li key={item._id}>
            <Link to={`/products/${item._id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsPage;
