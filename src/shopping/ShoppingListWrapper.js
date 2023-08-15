import React, { useState } from "react";
import ShoppingListForm from "./ShoppingListFrom";
import { v4 as uuidv4 } from "uuid";
import ShoppingList from "./ShoppingList";
import { EditShoppingList } from "./EditShoppingListForm";
uuidv4();

function ShoppingListWrapper() {
  const [products, setProduct] = useState([]);

  const addProduct = (product) => {
    setProduct([
      ...products,
      { id: uuidv4(), item: product, bought: false, isEditing: false },
    ]);
  };

  const toggleBought = (id) => {
    setProduct(
      products.map((product) =>
        product.id === id ? { ...product, bought: !product.bought } : product
      )
    );
  };

  const deleteProduct = (id) => {
    setProduct(products.filter((product) => product.id !== id));
  };

  const editProduct = (id) => {
    setProduct(
      products.map((product) =>
        product.id === id
          ? { ...product, isEditing: !product.isEditing }
          : product
      )
    );
  };

  const editItem = (item, id) => {
    setProduct(
      products.map((product) =>
        product.id === id
          ? { ...product, item, isEditing: !product.isEditing }
          : product
      )
    );
  };

  return (
    <div className="shopping-wrapper">
      <ShoppingListForm addProduct={addProduct} />
      {products.map((product, index) =>
        product.isEditing ? (
          <EditShoppingList editProduct={editItem} item={product} />
        ) : (
          <ShoppingList
            item={product}
            key={index}
            toggleBought={toggleBought}
            deleteProduct={deleteProduct}
            editProduct={editProduct}
          />
        )
      )}
    </div>
  );
}

export default ShoppingListWrapper;
