import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from "./components/ItemListContairner";
import CartWidget from "./components/CartWidget"
import ItemCount from './components/ItemCount';


function  App () {
  return (
    <>
      <NavBar />
      <ItemListContainer greating="Hola coder"/>
    </>
  )
}
export default App;
