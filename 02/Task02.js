import React from "react";
import { useParams, Link, Redirect } from "react-router-dom";
import products from "../src/products.json";
import Product from "../src/components/Product";

const Task02 = () => {
  const { id } = useParams();

  if (!id)
    return (
      <>
        <h1>Task02</h1>
        <ul>
          {products.map(({ id }) => (
            <li key={id}>
              <Link to={`/task02/product-${id}`}>{`Product ${id}`}</Link>
            </li>
          ))}
        </ul>
      </>
    );

  const product = products.find((product) => product.id === parseInt(id));
  if (!product) return <Redirect to="/task02" />;

  return (
    <>
      <h1>Task02</h1>
      <Product {...product} />
      <Link to="/task02">Go Back</Link>
    </>
  );
};

export default Task02;
