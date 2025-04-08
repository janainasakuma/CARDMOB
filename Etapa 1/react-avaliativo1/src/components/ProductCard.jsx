import React from "react";
import "./ProductCard.css";

const ProductCard = ({ name, price, onDelete, onEdit, onAddToCart }) => {
  return (
    <div className="product-card">
      <div>
        <h3>{name}</h3>
        <p>Preço: R$ {price}</p>
      </div>
      <div className="buttons">
        <button onClick={onEdit} className="edit">Editar</button>
        <button onClick={onDelete} className="delete">Remover</button>
        <button onClick={onAddToCart} className="cart">Adicionar ao Carrinho</button>
      </div>
    </div>
  );
};


export default ProductCard;

