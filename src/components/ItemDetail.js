import React, { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";




export const ItemDetail = ({ data }) => {
  const context = useContext(CartContext)
  const [goToCart, setGoToCart] = useState(0);
  

  const onAdd = (qty) => {
    qty > 0
      ? alert(`La cantidad a comprar es ${qty}`)
      : alert(`La cantidad es incorrecta`);
    setGoToCart(qty);
    context.addItem(data, qty);
  };

  return (
    <div className="caja">
      <h1>{data.nombre}</h1>
      <h1>{data.image}</h1>
      <p>{data.precio}</p>
      {
        goToCart 
         ? <Link to="/cart"> Finalizar Compra </Link>
         : <ItemCount initial={1} stock={5} onAdd={onAdd} />
        }
      <p>{data.detalle}</p>

      
    </div>
  );
};




export default ItemDetail;
