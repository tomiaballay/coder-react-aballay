import React from "react";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { collection, addDoc, } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";



const Cart = () => {
  const cartContext = useContext(CartContext);

  let subtotal = cartContext.sumPrice();
  let iva = (cartContext.sumPrice() * 21) / 100;
  let total = subtotal + iva;
 
 
  // *** ORDEN ****
  // const order = {
	//	buyer: {
	//		name: "Pablo",
	//		email: "Pablo@gmail.com",
	//		phone: "123123",
	//		address: "asdd",
	//	},
	//	items: cartContext.cartList.map((item) => ({
	//		id: item.id,
	//		title: item.nombre,
	//		price: item.precio,
	//		quantity: item.qty,
	//	})),
	//	total: total(),
	//};

	// const handleClick = () => {
	//	const db = getFirestore();
	//	const ordersCollection = collection(db, "orders");
	//	addDoc(ordersCollection, order).then(({ id }) => console.log(id));
	// };
 
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
            <button className="cartClear" onClick>
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