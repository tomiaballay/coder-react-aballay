import React from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const onAdd = (param) => {alert ("La cantidad comprada es ${param}")};

const Item = ({info}) => {
    return (
        <div className="caja">
        <Link to={"/detalle/${info.id}"} >
        <h1>{info.nombre}</h1>
        </Link>
        <p>{info.precio}</p>
        <p>{info.detalle}</p>
        <button>DETALLE DEL PRODUCTO</button>
        <div className="subtr">
        <ItemCount initial={1} stock={5} onAdd={onAdd}/>
        </div>
       
        </div>
    )
}

export default Item;