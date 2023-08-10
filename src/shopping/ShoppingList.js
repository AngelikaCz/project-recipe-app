import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import "./ShoppingList.css";

export const ShoppingList = ({ item, toggleComplete, deleteProduct }) => {
  console.log(item.item);
  return (
    <div className="ShoppingList">
      <h5
        onClick={() => toggleComplete(item.id)}
        className={`${item.completed ? "completed" : ""}`}
      >
        {item.item}
      </h5>{" "}
      <div>
        <FontAwesomeIcon icon={faPenToSquare} />
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => deleteProduct(item.id)}
        />
      </div>
    </div>
  );
};

export default ShoppingList;
