import React from "react";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "../container/ItemListContainer";
import { Link } from "react-router-dom";
import { collection, serverTimestamp, setDoc, doc, } from "firebase/firestore";
import {db} from "../utils/firebaseConfig"

const Cart = () => {
  const cartContext = useContext(CartContext);

  let subtotal = cartContext.sumPrice();
  let iva = (cartContext.sumPrice() * 21) / 100;
  let total = subtotal + iva;

  const createOrder = () => {
    let itemsForDB = cartContext.cartList.map (item => ({
      id:item.idItem,
      nombre: item.nameItem,
      precio:item.costItem,
      qty: item.qtyItem
    }));
    let order = {
      buyer : {
        email: "leonardo@dicaprio.com",
        name: "Leo Dicaprio",
        phone: "3457345734"
      },
      date: serverTimestamp (),
      items: itemsForDB,
      total: {total}
    }
    console.log(order)

    const createOrderInFirestore = async () => {
      const newOrderRef = doc (collection (db, "orders"))
      await setDoc (newOrderRef, order)
      return newOrderRef
    }
    createOrderInFirestore()
    .then (result => alert("Su orden fue creada. ID=" + result.id))
    .catch(e => console.log (e))
  }

  return (
    <>
      {cartContext.cartList.length > 0 ? (
        cartContext.cartList.map((item) => {
          return (
            <div className="cartContainer">
              <div className="cartCard">
                
                <h2 className="cartName">{item.nombre}</h2>
                <p className="cartPriceUnidad">
                  Precio por unidad: <br />${item.precio}
                </p>
                <div>
                  <div className="cartUPD">
                    <p className="cartQty">{item.qty} unidades</p>
                    <p className="cartPrice">${item.precio * item.qty}</p>
                    <button
                      className="cartRemove"
                      onClick={() => cartContext.removeItem(item.id)}
                    >
                      Delete Item
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="carritoVacio">
          <h1>El carrito está vacío 🛒</h1>
          <Link to="/">
            <p>Volver al inicio</p>
          </Link>
        </div>
      )}

      {cartContext.cartList.length > 0 && (
        <div className="cartContainer">
          <div className="footer">
            <button className="cartClear" onClick={cartContext.clear}>
              Clear Items{" "}
            </button>
            <button className="cartClear" onClick={createOrder}>
              Terminar compra
            </button>
            <div className="total">
              <p>Subtotal: ${subtotal} </p>
              <p>IVA(21%): ${iva} </p>
              <p>
                <b>Total: ${total}</b>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;