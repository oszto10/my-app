import React, { useEffect, useState } from "react";
import Pizza from "./Pizza";

function Pizzas() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(function () {
    fetch(`http://127.0.0.1:2022`)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setPizzas(data);
      });
  }, []);
  return (
    <div>
      {pizzas.map((pizza) => (
        <Pizza
          name={pizza.name}
          id={pizza.id}
          ingredients={pizza.ingredients}
          price={pizza.price}
          key={pizza.id}
          picture={pizza.picture}
        />
      ))}
    </div>
  );
}

export default Pizzas;
