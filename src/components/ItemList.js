import React from "react";
import Item from "./Item"


const ItemList = ({ data } = []) => {
    return data.map((film) => <Item key={film.id} data={film} />);
  };

export default ItemList;