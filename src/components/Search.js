import React, { useEffect, useState } from "react";
import "./Search.css";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };
  return (
    <form onSubmit={submitHandler}>
      <FaSearch className="icon"></FaSearch>
      <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        value={input}
      />
    </form>
  );
}

export default Search;
