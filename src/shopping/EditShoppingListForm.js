import React, { useState } from "react";

export const EditShoppingList = ({ editProduct, item }) => {
  const [value, setValue] = useState(item.item);
  const handleSubmit = (e) => {
    e.preventDefault();
    editProduct(value, item.id);

    setValue("");
  };
  return (
    <form className="shopping-form" onSubmit={handleSubmit}>
      <h4>Edit your product</h4>
      <input
        type="text"
        className="shopping-input "
        value={value}
        placeholder="Edit product"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="shopping-button">
        Edit product
      </button>
    </form>
  );
};
