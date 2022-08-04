import React, { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";



const ItemDetail = ({ data }) => {
  const context = useContext(CartContext)
  const [goToCart, setGoToCart] = useState(0);
  

  const onAdd = (qty) => {
    
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

      <button>DETALLE DEL PRODUCTO</button>
    </div>
  );
};


export default ItemDetail;
