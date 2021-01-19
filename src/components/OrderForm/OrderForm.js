import React, { useState } from 'react';
import { addOrder } from '../../apiCalls';

const OrderForm = ({ addNewOrder }) => {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && ingredients.length) {
      const newOrder = {
        id: Date.now(),
        name,
        ingredients
      };
      addNewOrder(newOrder);
      addOrder(newOrder);
      clearInputs();
    }
  };

  const handleIngredientChange = (e) => {
    e.preventDefault();
    const updatedIngredients = [...ingredients];
    updatedIngredients.push(e.target.value);
    setIngredients(updatedIngredients);
    //setIngredients((prevIng) => [...prevIng, e.target.value]);
  };

  const clearInputs = () => {
    setName('');
    setIngredients([]);
  };

  const possibleIngredients = [
    'beans',
    'steak',
    'carnitas',
    'sofritas',
    'lettuce',
    'queso fresco',
    'pico de gallo',
    'hot sauce',
    'guacamole',
    'jalapenos',
    'cilantro',
    'sour cream'
  ];
  const ingredientButtons = possibleIngredients.map((ingredient) => {
    return (
      <button
        key={ingredient}
        name={ingredient}
        value={ingredient}
        onClick={(e) => handleIngredientChange(e)}
      >
        {ingredient}
      </button>
    );
  });

  return (
    <form>
      <input
        type='text'
        placeholder='Name'
        name='name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {ingredientButtons}
      <p>Order: {ingredients.join(',') || 'Nothing selected'}</p>
      <button onClick={(e) => handleSubmit(e)}>Submit Order</button>
    </form>
  );
};

export default OrderForm;
