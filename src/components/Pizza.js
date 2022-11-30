import React, { useState } from "react";
import "./Pizza.css";

function Pizza({ name, id, ingredients, picture, price }) {
  /*   const pizzaName = pizzaData.name;
  const  = pizzaData */
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className={"Pizza" + (isFavorite ? " fav" : "")}>
      <img
        onClick={() => setIsFavorite(true)}
        src="https://as1.ftcdn.net/v2/jpg/01/09/84/42/1000_F_109844239_A7MdQSDf4y1H80cfvHZuSa0zKBkZ68S7.jpg"
        alt="csillag"
        className="favorite"
      />
      <p>Sorszám: {id}</p>
      <h1>
        {name}
        {isFavorite ? "Kedvenc" : "Nem kedvenc"}
      </h1>
      <h3>{ingredients}</h3>
      <h1>{price} Ft</h1>
    </div>
  );
}

export default Pizza;
