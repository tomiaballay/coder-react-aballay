import React from "react";
import Item from "./Item"


const ItemList = ({ data } = []) => {
    return data.map((e) => <Item key={e.id} data={e} />);
  };

export default ItemList;