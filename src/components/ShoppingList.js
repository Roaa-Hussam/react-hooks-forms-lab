import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setMySearch] = useState('')

  function onItemFormSubmit(newItem) {
    setItems([...items, newItem])

  }

  function onSearchChange(event) {
    setMySearch(event.target.value)
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function myItemsByName(item) {
    if (item.name.toLowerCase().match(search.toLowerCase()))
      return item
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  }).filter(myItemsByName);

  return (
    <div className="ShoppingList">
      <ItemForm items={items} onItemFormSubmit
        ={onItemFormSubmit} />
      <Filter onCategoryChange={handleCategoryChange}
        onSearchChange={onSearchChange}
        search={search} />

      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;