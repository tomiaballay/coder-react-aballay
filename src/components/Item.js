import React from "react";
import { Link } from "react-router-dom";

const Item = ({ data }) => {


  return (
    <div className="caja">
        <h1>{data.nombre}</h1>
        <h1>{data.image}</h1>
      <p>{data.precio}</p>
      <p>{data.detalle}</p>
      <Link to={`/detalle/${data.id}`}>
      <button>DETALLE DEL PRODUCTO</button>
      </Link>
      <div className="subtr">
       
      </div>
    </div>
  );
};

export default Item;
