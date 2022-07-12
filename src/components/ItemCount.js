import React, { useState } from "react";

const ItemCount = ({initial, stock, onAdd}) => {

    const [counter, setCounter] = useState(initial)

    const add = () => {
        if(counter < stock ){
            const aux = counter+1
            setCounter (aux)
        }
    }

    const subtract = () => {
        if(counter > initial ){
            const aux = counter-1
            setCounter (aux)
        }
    }
    return (
        <div>
            <div className="card">
                <button className="counter_item" onClick={subtract}> - </button>
                <p className="counter_item">{counter}</p>
                <button className="counter_item" onClick={add}> + </button>
            </div>
            <button className="counter_button" onClick={onAdd}>Agregar al carrito</button>
        </div>
    )
}


export default ItemCount;