import React, { useState } from 'react';
import './App.css';
import { getOrders } from '../../apiCalls';
import Orders from '../../components/Orders/Orders';
import OrderForm from '../../components/OrderForm/OrderForm';
import { useEffect } from 'react';

const App = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState('');

  const getAllOrders = () => {
    getOrders()
      .then((data) => setOrders(data.orders))
      .catch((err) => setError(`Error fetching:, ${err}`));
  };

  useEffect(() => getAllOrders(), []);

  return (
    <main className='App'>
      <header>
        <h1>Burrito Builder</h1>
        <OrderForm />
      </header>

      <Orders orders={orders} />
    </main>
  );
};

export default App;