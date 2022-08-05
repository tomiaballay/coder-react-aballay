import React, { useState, useEffect } from "react";
import ItemList from "../components/ItemList";
import { useParams } from "react-router-dom";
import { db } from "../utils/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";


const productos = [
    {id: 1, nombre: "SHAMPOO", precio: 500, detalle: "Shampoo rejuvenecedor para todos los cabellos", category: "cabello", Imagen: "shampoo.jpg"},
    {id: 2, nombre: "ACONDICIONADOR", precio: 700, detalle: "Acondicionador rejuvenecedor para todos los cabellos", category: "cabello"},
    {id: 3, nombre: "CREMA", precio: 800, detalle: "Crema rejuvenecedora para todas las pieles", category: "cabello"},
    {id: 4, nombre: "DESODORANTE", precio: 600 ,detalle: "Desodorante antitraspirante, invisble", category: "aroma"},
    {id: 5, nombre: "PERFUME", precio: 1500, detalle: "Perfume de alta calidad", category: "aroma"},
  ];



function ItemListContainer() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
     //if (id === undefined) {
      //const getData = new Promise((resolve) => {
        //setTimeout(() => {
          //resolve(productos);
        //}, 2000);
     // });
      //getData.then((res) => setData(res));
    //} else {
      //const getData = new Promise((resolve) => {
        //setTimeout(() => {
          //resolve(productos.filter((item) => item.categoryId === parseInt(id)));
        //}, 2000);
      //});
      //getData.then((res) => setData(res));

      const firestoreFetch = async () => {
        const querySnapshot = await getDocs(collection(db, "productos"));
        const dataFromFirestore = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))
        return dataFromFirestore
        }
      
      firestoreFetch ()
      .then(result => setData(result))
      .catch (err => console.log(err))
  }, [id]);

  return (
    <>
      {data.length > 0 ? (
        <div>
          <ItemList data={data} />
        </div>
      ) : (
        <p className="cargando">Cargando...</p>
      )}
    </>
  );
}

export default ItemListContainer;
