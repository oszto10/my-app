import React, { useEffect, useState } from "react";
import "./Pizza.css";

function Pizza({ name, id, ingredients, picture, price }) {
  /*   const pizzaName = pizzaData.name;
  const  = pizzaData */
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(function () {
    console.log(isFavorite);
  });

  return (
    <div className={"Pizza" + (isFavorite ? " fav" : "")}>
      <img
        onClick={() => setIsFavorite(!isFavorite)}
        src={
          isFavorite
            ? "https://www.iconpacks.net/icons/2/free-favourite-icon-2765-thumb.png"
            : "https://as1.ftcdn.net/v2/jpg/01/09/84/42/1000_F_109844239_A7MdQSDf4y1H80cfvHZuSa0zKBkZ68S7.jpg"
        }
        alt="csillag"
        className="favorite"
      />

      <p>Sorszám: {id}</p>
      <h1>{name}</h1>
      <h3>{ingredients}</h3>
      <h1>{price} Ft</h1>
      <img src={"pictures/" + picture} alt="pizza_picture" />
    </div>
  );
}

export default Pizza;
