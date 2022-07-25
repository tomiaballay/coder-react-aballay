import React, {useEffect, useState} from "react";
import ItemDetail from "../components/ItemDetail";
import { useParams } from "react-router-dom";




const productos = [
    {id: 1, nombre: "SHAMPOO", precio: 500, detalle: "Shampoo rejuvenecedor para todos los cabellos", category: "cabello", Imagen: "shampoo.jpg"},
    {id: 2, nombre: "ACONDICIONADOR", precio: 700, detalle: "Acondicionador rejuvenecedor para todos los cabellos", category: "cabello"},
    {id: 3, nombre: "CREMA", precio: 800, detalle: "Crema rejuvenecedora para todas las pieles", category: "cabello"},
    {id: 4, nombre: "DESODORANTE", precio: 600 ,detalle: "Desodorante antitraspirante, invisble", category: "aroma"},
    {id: 5, nombre: "PERFUME", precio: 1500, detalle: "Perfume de alta calidad", category: "aroma"},
  ];
 
export const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const { detalleId } = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve (productos);
            }, 3000);
        });

        getData.then(res => setData(res.filter(productos => productos.id === parseInt(detalleId))[0]));
    }, )


    return (
        <ItemDetail data={data}/>
    )
}

export default ItemDetailContainer;

