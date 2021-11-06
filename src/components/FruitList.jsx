import { useState } from "react";

const FruitList = () => {
  const [fruits, setFruits] = useState([
    { name: "banana", color: "yellow", price: 2 },
    { name: "cherry", color: "red", price: 3 },
    { name: "strawberry", color: "red", price: 4 },
  ]);

  const fruitsName = fruits.map((fruits) => {
    return <li>{fruits.name}</li>;
  });

  const filterRedFruits = () => {
    return setFruits(
      fruits.filter((fruits) => {
        return fruits.color === "red";
      })
    );
  };
  const totalPrice = fruits.reduce((acc, crr) => {
    return acc + crr.price;
  }, 0);

  return (
    <>
      <h2>Total Price : {totalPrice} </h2>
      <ul>{fruitsName}</ul>
      <button onClick={filterRedFruits}>Filter by red color</button>
    </>
  );
};

export default FruitList;
