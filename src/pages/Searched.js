import React, { useState, useEffect } from "react";
import { API_URL } from "../Routes";
import { useParams, Link } from "react-router-dom";
import "./Searched.css";

function Searched() {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let params = useParams();

  const getSearched = async (name) => {
    const data = await fetch(
      `${API_URL}complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
    );
    const recipes = await data.json();
    setSearchedRecipes(recipes.results);
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);
  return (
    <div className="grid">
      {searchedRecipes.map((item) => {
        return (
          <div className="card" key={item.id}>
            <Link to={"/recipe/" + item.id}>
              <img src={item.image} alt="Recipe" />
              <h4>{item.title}</h4>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Searched;
