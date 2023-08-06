import React, { useEffect, useState } from "react";
import "./Vegan.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

function Vegan() {
  const [vegan, setVegan] = useState([]);

  useEffect(() => {
    getVegan();
  }, []);

  const getVegan = async () => {
    const check = localStorage.getItem("vegan");

    if (check) {
      setVegan(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=ce1e25bd03cc4691830b622b58c81275&number=9`
      );
      const data = await api.json();
      localStorage.setItem("vegan", JSON.stringify(data.recipes));
      setVegan(data.recipes);
      console.log(data.recipes);
    }
  };

  return (
    <div>
      <div className="wrapper">
        <h3>The Best Vegan Picks</h3>
        <Splide
          options={{
            perPage: 3,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "50px",
          }}
        >
          {vegan.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <div className="card">
                  <p>{recipe.title}</p>
                  <img
                    className="card-image"
                    src={recipe.image}
                    alt={recipe.title}
                  />
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
}

export default Vegan;
