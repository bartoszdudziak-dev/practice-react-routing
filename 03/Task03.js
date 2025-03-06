import React from "react";
import products from "./../src/products.json";
import { useParams } from "react-router-dom";
import Shop from '../src/components/Shop'

const Task03 = () => {
  const { category } = useParams();

  let fitleredProducts;

  if (!category) {
    fitleredProducts = products;
  } else {
    fitleredProducts = products.filter(
      (product) => product.category.toLowerCase() === category
    );
  }

  return (
    <>
      <h1>Task 03</h1>
      <Shop products={fitleredProducts}/>
    </>
  );
};

export default Task03;
