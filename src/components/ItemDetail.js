import React, { useState } from "react";
import ItemCount from "./ItemCount";
import Item from "./Item";
import { Link } from "react-router-dom";

const ItemDetail = ({ data }) => {
  const [goToCart, setGoToCart] = useState(false);

  const onAdd = (quantity) => {
    setGoToCart(true);
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
