import React, { useState } from 'react';

import id from 'uuid/v4';

import Grudges from './Grudges';
import NewGrudge from './NewGrudge';

import initialState from './initialState';

const Application = () => {
  const [grudges, setGrudges] = useState(initialState.cards);
  const [cartItems, setCartItems] = useState(initialState.cartsItems)


 const updateCart = (id,increment) => {
    setCartItems(cartItems.map(grudge => {
      if (grudge.id === id) {
      return { ...grudge, quantity: increment ?  grudge.quantity +=1 : grudge.quantity -= 1 };
      }
    }))
  
}
  const addToCart = grudge => {
    grudge.quantity = 1;
    setCartItems([grudge, ...cartItems]);
   
    
  }
    
 

  return (console.log(cartItems, grudges),
    <div className="Application">
      <Grudges grudges={grudges} cartItems={cartItems} addToCart={addToCart} updateCart={updateCart} />
    </div>
  );
};

export default Application;
