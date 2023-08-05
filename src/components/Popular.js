import React, { useEffect } from "react";
import { API_KEY } from "../Routes";

function Popular() {
  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=ce1e25bd03cc4691830b622b58c81275&number=9`
    );
    const data = await api.json();
    console.log(data);
  };

  return <div>Popular</div>;
}

export default Popular;
