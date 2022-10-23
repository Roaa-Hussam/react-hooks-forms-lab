import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {

  const [itemName, setItemName] = useState('')
  const [itemCategory, setItemCatagory] = useState('Produce')

  function submitMyform(event) {
    event.preventDefault()
    const newItem = {
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: itemName,
      category: itemCategory,
    };
    props.onItemFormSubmit(newItem)
  }

  function handleNewItem(event) {
    setItemCatagory(event.target.value)
  }
  function handleNewName(event) {
    setItemName(event.target.value)
  }

  return (
    <form className="NewItem" onSubmit={submitMyform}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleNewName} value={itemName} />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleNewItem}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;