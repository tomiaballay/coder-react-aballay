import { render } from "@testing-library/react";
import ItemCount from "./ItemCount";


function ItemListContainer (props) {

    const onAdd = (param) => {alert ("La cantidad comprada es ${param}")}

    return (
        <>
        <h4>{props.title}</h4>
     
        <ItemCount initial={1} stock={5} onAdd={onAdd}/>
    
        </>
    )
};

render(<ItemListContainer title="Hola coderhouse"/>)

export default ItemListContainer;