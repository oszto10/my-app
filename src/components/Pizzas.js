import React from "react";
import { pizzas } from "../pizza_data";
import Pizza from "./Pizza";

function Pizzas() {
  return (
    <div>
      {pizzas.map((pizza) => (
        <Pizza name={pizza.name} id={pizza.id} />
      ))}
    </div>
  );
}

export default Pizzas;