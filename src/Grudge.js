import React from "react";

const Grudge = ({ grudge, addToCart, updateCart, cartItems }) => {
  const addToCartFunc = () => addToCart(grudge);
  const quantity = cartItems.filter(item =>  item.id === grudge.id)[0] !== undefined ? cartItems.filter(item =>  item.id === grudge.id)[0].quantity : null
  const updateInCart = (value) => updateCart( grudge.id, value);

  return (
    <article className="Grudge">
      <img className="card-img" src={grudge.img_url}></img>
      <div className="card-details">
        <h3>{grudge.name}</h3>
        <h3 className="orignal-price">
          {grudge.original_price ? grudge.original_price : ""}
        </h3>
        <h3>${grudge.final_price}</h3>
      </div>
      <p>{grudge.description}</p>

      <div className="Grudge-controls">
        {quantity && quantity >= 1? (
          <div className="counter-buttons">
            <button  onClick={updateInCart.bind(this,false)} className="Grudge-forgiven">
              -
            </button>
            <div className="counter-count">{quantity}</div>
            <button onClick={updateInCart.bind(this, true)} className="Grudge-forgiven">+</button>
          </div>
        ) : (
          <button className="Grudge-forgiven" onClick={addToCartFunc}>
            Add to Cart
          </button>
        )}
      </div>
    </article>
  );
};

export default Grudge;
