import React from "react";


const Item = ({info}) => {
    return (
        <div className="caja">
        <h1>{info.nombre}</h1>
        <p>{info.precio}</p>
        <p>{info.detalle}</p>
        <button>DETALLE DEL PRODUCTO</button>
        </div>
    )
}

export default Item;