import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from "./container/ItemListContairner";
import CartWidget from "./components/CartWidget"
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './container/ItemDetailContainer';


function  App () {
  return (
    <>
      <NavBar />
      {/*<ItemListContainer greating="Hola coder"/>*/}
      <ItemDetailContainer />
    </>
  )
}
export default App;
