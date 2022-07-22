import React, { useEffect, useState } from "react";
import ItemCount from "../components/ItemCount";
import ItemList from "../components/ItemList";
import { useParams } from "react-router-dom"


 const productos = [
    {id:1, nombre: "Shampoo", precio: 500, detalle: "Shampoo rejuvenecedor para todos los cabellos", category: "cabello", Image: "https://images.app.goo.gl/qiccg57RnPng3rnYA"},
    {id:2, nombre: "Acondicionador", precio: 700, detalle: "Acondicionador rejuvenecedor para todos los cabellos", category: "cabello"},
    {id:3, nombre: "Crema", precio: 800, detalle: "Crema rejuvenecedora para todas las pieles", category: "cabello"},
    {id:4, nombre: "Desodorante", precio: 600 ,detalle: "Desodorante antitraspirante, invisble", category: "aroma"},
    {id:5, nombre: "Perfume", precio: 1500, detalle: "Perfume de alta calidad", category: "aroma"},
  ];

export const ItemListContainer = () => {
 

const [data, setData] = useState ([]);

const { categoriaId } = useParams();

useEffect (() => {
    const getData = new Promise (resolve => {
        setTimeout(() => {
            resolve(productos);
        }, 3000);
    });
if (categoriaId) {
    getData.then (res => setData (res.filter (productos => productos.category === categoriaId)));
} else {
getData.then(res => setData(res));
}


},[categoriaId])


    return (
        <>
        
        <ItemList data={data}/>
        </>
    )
};


export default ItemListContainer;