import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from "./container/ItemListContainer";
import CartWidget from "./components/CartWidget"
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './container/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from "./components/Cart";
import CartProvider from './context/CartContext';



function  App () {
  return (
   <>
   <div style={{fontFamily:"nunito"}}>
     <BrowserRouter>
     <CartProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:categoriaId" element={<ItemListContainer />}  />
        <Route path="/detalle/:detalleId" element={<ItemDetailContainer />}  />
        <Route path="/cart" element={<Cart />}  />
      </Routes>
      </CartProvider>
    </BrowserRouter>
    </div>
   </>
  )
}
export default App;