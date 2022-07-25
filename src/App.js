import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from "./container/ItemListContainer";
import CartWidget from "./components/CartWidget"
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './container/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function  App () {
  return (
   <>
   <div style={{fontFamily:"nunito"}}>
     <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:categoriaId" element={<ItemListContainer />}  />
        <Route path="/detalle/:detalleId" element={<ItemDetailContainer />}  />
      </Routes>
      {/*<ItemListContainer greating="Hola coder"/>*/}
      {/*<ItemDetailContainer /> */}
    </BrowserRouter>
    </div>
   </>
  )
}
export default App;
