import React, { useState } from "react";


const ItemCount = ({ initial, stock, onAdd }) => {
    const [counter, setCounter] = useState(initial);
  
    const add = () => {
      if (counter < stock) {
        const aux = counter + 1;
        setCounter(aux);
      } else {
        alert("No hay mas stock");
      }
    };
  
    const subtract = () => {
      if (counter > initial) {
        const aux = counter - 1;
        setCounter(aux);
      } else {
        alert(`Querés menos que ${initial}`);
      }
    };
  
return (
    <div>
      <div className="card">
        <button onClick={subtract} className="counter_item">
          -
        </button>
        <p className="counter_item">{counter}</p>
        <button onClick={add} className="counter_item">
          +
        </button>
      </div>
      <button onClick={() => onAdd(counter)} className="counter_button">
        Agregar al carrito
      </button>
    </div>
  );
};


export default ItemCount;