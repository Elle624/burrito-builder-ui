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

  const addNewOrder = (newOrder) => {
    setOrders([...orders, newOrder]);
  };

  useEffect(() => getAllOrders(), [orders.length]);

  return (
    <main className='App'>
      <header>
        <h1>Burrito Builder</h1>
        <OrderForm addNewOrder={addNewOrder} />
      </header>
      <Orders orders={orders} />
    </main>
  );
};

export default App;
