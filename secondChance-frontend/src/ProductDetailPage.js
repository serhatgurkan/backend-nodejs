import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ProductDetailPage() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    axios.get(`/api/secondchance/items/${id}`)
      .then(res => setItem(res.data));
  }, [id]);

  if (!item) return <div>Loading...</div>;

  return (
    <div>
      <h1>{item.name}</h1>
      <p>Category: {item.category}</p>
      <p>Price: ${item.price}</p>
      <a href="/products">Back to Products</a>
    </div>
  );
}

export default ProductDetailPage;
