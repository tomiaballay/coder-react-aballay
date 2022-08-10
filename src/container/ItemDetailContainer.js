import React, {useEffect, useState} from "react";
import ItemDetail from "../components/ItemDetail";
import { useParams } from "react-router-dom";
import { firestoreFetchOne } from "../utils/firestoreFetch";




const productos = [
    {id: 1, nombre: "SHAMPOO", precio: 500, detalle: "Shampoo rejuvenecedor para todos los cabellos", category: "cabello", Imagen: "shampoo.jpg"},
    {id: 2, nombre: "ACONDICIONADOR", precio: 700, detalle: "Acondicionador rejuvenecedor para todos los cabellos", category: "cabello"},
    {id: 3, nombre: "CREMA", precio: 800, detalle: "Crema rejuvenecedora para todas las pieles", category: "cabello"},
    {id: 4, nombre: "DESODORANTE", precio: 600 ,detalle: "Desodorante antitraspirante, invisble", category: "aroma"},
    {id: 5, nombre: "PERFUME", precio: 1500, detalle: "Perfume de alta calidad", category: "aroma"},
  ];
 
  const ItemDetailContainer = ({ greating }) => {
    const [data, setData] = useState(false);
    const { idItem } = useParams();

    useEffect(() => {
      firestoreFetchOne (idItem)
      .then(result => setData(result))
      .catch(err => console.log(err))
    },[idItem])
  
    
  
    return (
      <>
       <div>{greating}</div>
        <div>
          <ItemDetail data={data} />
        </div>
      </>
    );
  };

export default ItemDetailContainer;

