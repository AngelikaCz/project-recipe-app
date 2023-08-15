import React, { useState } from "react";

export const ShoppingListForm = ({ addProduct }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(value);

    setValue("");
  };
  return (
    <form className="shopping-form" onSubmit={handleSubmit}>
      <h4>Your shopping list</h4>
      <input
        type="text"
        className="shopping-input "
        value={value}
        placeholder="What do you need to buy?"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="shopping-button">
        Add product
      </button>
    </form>
  );
};

export default ShoppingListForm;
