import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from "./container/ItemListContainer";
import ItemDetailContainer from './container/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from "./components/Cart";
import CartContextProvider  from './context/CartContext';



function  App () {
  return (
   <>
   <div style={{fontFamily:"nunito"}}>
   <CartContextProvider>
     <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />}  />
        <Route path="/item/:id" element={<ItemDetailContainer />}  />
        <Route path="/cart" element={<Cart />}  />
      </Routes>
    </BrowserRouter>
    </CartContextProvider>
    </div>
   </>
  )
}
export default App;