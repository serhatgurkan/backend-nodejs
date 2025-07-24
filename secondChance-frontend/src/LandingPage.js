import React, { useEffect, useState } from 'react';
import axios from 'axios';

function LandingPage() {
  const [message, setMessage] = useState('');
  const [url, setUrl] = useState('');

  useEffect(() => {
    axios.get('localhost:3000/api/secondchance/landing')
      .then(res => {
        setMessage(res.data.message);
        setUrl(res.data.url);
      });
  }, []);

  return (
    <div>
      <h1>{message}</h1>
      <p>Deployment URL: <a href={url}>{url}</a></p>
      <a href="/products">View Products</a>
    </div>
  );
}

export default LandingPage;
