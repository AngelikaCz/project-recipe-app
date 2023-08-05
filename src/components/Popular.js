import React, { useEffect, useState } from "react";
import { API_KEY } from "../Routes";
import "./Popular.css";

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=ce1e25bd03cc4691830b622b58c81275&number=9`
    );
    const data = await api.json();
    setPopular(data.recipes);
    console.log(data.recipes);
  };

  return (
    <div>
      {popular.map((recipe) => {
        return (
          <div className="wrapper" key={recipe.id}>
            <h3>Popular Picks</h3>
            {popular.map((recipe) => {
              return (
                <div className="card">
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Popular;
