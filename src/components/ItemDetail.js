import React from "react";

const ItemDetail = ({ data }) => {
    return (
        <div className="caja">
        <h1>{data.nombre}</h1>
        <p>{data.precio}</p>
        <p>{data.detalle}</p>
        <button>DETALLE DEL PRODUCTO</button>
        </div>
    );
}

export default ItemDetail;