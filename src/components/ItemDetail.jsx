import React from "react";


const ItemDetail = ({ product }) => {
  return (
    <>
    < img src={product.image} alt={product.title} />
          <h1>{product.title}</h1>
          <span>${product.price}</span>
          <p>{product.description}</p>
    </> 
  );
};


export default ItemDetail