import React, { useEffect, useState } from "react";
import ItemCount from "../components/ItemCount";
import ItemList from "../components/ItemList";


 const productos = [
    {"nombre": "Shampoo", "precio": 500, "id": 1, "detalle": "Shampoo rejuvenecedor para todos los cabellos"},
    {"nombre": "Acondicionador", "precio": 700, "id":2, "detalle": "Acondicionador rejuvenecedor para todos los cabellos"},
    {"nombre": "Crema", "precio": 800, "id": 3,"detalle": "Crema rejuvenecedora para todas las pieles"},
    {"nombre": "Desodorante", "precio": 600, "id": 4 ,"detalle": "Desodorante antitraspirante, invisble"},
    {"nombre": "Perfume", "precio": 1500, "id": 5,"detalle": "Perfume de alta calidad"},
    {"nombre": "Esmalte", "precio": 650, "id": 6,"detalle": "Uñas resaltantes"}
  ];

export const ItemListContainer = ({greating}) => {
 
    const onAdd = (param) => {alert ("La cantidad comprada es ${param}")};


const [data, setData] = useState ([]);

useEffect (() => {
    const getData = new Promise (resolve => {
        setTimeout(() => {
            resolve(productos);
        }, 3000);
    });
getData.then(res => setData(res));

},[])


    return (
        <>
        <div>{greating}</div>
        <ItemCount initial={1} stock={5} onAdd={onAdd}/>
        <ItemList data={data}/>
        </>
    )
};


export default ItemListContainer;