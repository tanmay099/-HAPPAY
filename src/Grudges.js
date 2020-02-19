import React from "react";
import Grudge from "./Grudge";

const Grudges = ({ grudges = [], addToCart, updateCart, cartItems }) => {
  return (
    <section className="Grudges">
      {grudges.map(grudge => (
        <Grudge key={grudge.id} cartItems={cartItems} grudge={grudge} addToCart={addToCart} updateCart={updateCart} />
      ))}
    </section>
  );
};

export default Grudges;
