import React from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const Item = ({ info }) => {


  return (
    <div className="caja">
        <h1>{info.nombre}</h1>
        <h1>{info.image}</h1>
      <p>{info.precio}</p>
      <p>{info.detalle}</p>
      <Link to={`/detalle/${[info.id]}`}>
      <button>DETALLE DEL PRODUCTO</button>
      </Link>
      <div className="subtr">
       
      </div>
    </div>
  );
};

export default Item;
