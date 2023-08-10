import React, { useState } from "react";
import ShoppingListForm from "./ShoppingListFrom";
import { v4 as uuidv4 } from "uuid";
import ShoppingList from "./ShoppingList";
uuidv4();

function ShoppingListWrapper() {
  const [products, setProduct] = useState([]);

  const addProduct = (product) => {
    setProduct([
      ...products,
      { id: uuidv4(), item: product, completed: false, isEditing: false },
    ]);
  };

  const toggleComplete = (id) => {
    setProduct(
      products.map((product) =>
        product.id === id
          ? { ...product, completed: !product.completed }
          : product
      )
    );
  };

  const deleteProduct = (id) => {
    setProduct(products.filter((product) => product.id !== id));
  };

  return (
    <div className="shopping-wrapper">
      <ShoppingListForm addProduct={addProduct} />
      {products.map((product, index) => (
        <ShoppingList
          item={product}
          key={index}
          toggleComplete={toggleComplete}
          deleteProduct={deleteProduct}
        />
      ))}
    </div>
  );
}

export default ShoppingListWrapper;
