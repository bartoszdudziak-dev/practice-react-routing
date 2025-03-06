import React from "react";
import Product from "./Product";
import { Link } from "react-router-dom";

const Shop = ({ products }) => {
  return (
    <section>
      {products.map((p) => (
        <Link key={p.id} to={`/task02/product-${p.id}`}>
          <Product {...p} />
        </Link>
      ))}
    </section>
  );
};

export default Shop;
