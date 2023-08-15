import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import "./ShoppingList.css";

export const ShoppingList = ({
  item,
  toggleBought,
  deleteProduct,
  editProduct,
}) => {
  console.log(item.item);
  return (
    <div className="ShoppingList">
      <h5
        onClick={() => toggleBought(item.id)}
        className={`${item.bought ? "bought" : ""}`}
      >
        {item.item}
      </h5>{" "}
      <div>
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => editProduct(item.id)}
        />
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => deleteProduct(item.id)}
        />
      </div>
    </div>
  );
};

export default ShoppingList;
