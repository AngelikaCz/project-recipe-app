import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import "./Cuisine.css";
import { API_KEY, API_URL } from "../Routes";

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  const getCuisine = async (name) => {
    const data = await fetch(
      `${API_URL}complexSearch?apiKey=${API_KEY}&cuisine=${name}`
    );
    const recipes = await data.json();
    setCuisine(recipes.results);
  };
  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);

  return (
    <div className="grid">
      {cuisine.map((item) => {
        return (
          <div key={item.id}>
            {" "}
            <img className="card-img" src={item.image} alt="Recipe" />
            <h4>{item.title}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default Cuisine;