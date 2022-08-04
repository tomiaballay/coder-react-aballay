import React, { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";



const Item = ({ info }) => {
  const context = useContext(CartContext)
  const [goToCart, setGoToCart] = useState(0);
  

  const onAdd = (qty) => {
    qty > 0
      ? alert(`La cantidad a comprar es ${qty}`)
      : alert(`La cantidad es incorrecta`);
    setGoToCart(qty);
    context.addItem(info, qty);
  };

  return (
    <div className="caja">
      <h1>{info.nombre}</h1>
      <h1>{info.image}</h1>
      <p>{info.precio}</p>
      {
        goToCart 
         ? <Link to="/cart"> Finalizar Compra </Link>
         : <ItemCount initial={1} stock={5} onAdd={onAdd} />
        }
      <p>{info.detalle}</p>

      <button>DETALLE DEL PRODUCTO</button>
    </div>
  );
};

const ItemDetail = ({ data }) => {
  return <>{data ? <Item key={data.id} info={data} /> : "Cargando..."}</>;
};


export default ItemDetail;
