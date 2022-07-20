import React, {useEffect, useState} from "react";
import ItemDetail from "../components/ItemDetail";


const film = 
    {"nombre": "Shampoo", "precio": 500, "id": 1, "detalle": "Shampoo rejuvenecedor para todos los cabellos"};
 
export const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve (film);
            }, 3000);
        });

        getData.then(res => setData(res));
    }, []);


    return (
        <ItemDetail data={data}/>
    )
}

export default ItemDetailContainer;

