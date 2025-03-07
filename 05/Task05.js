import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import products from "../src/products.json";
import Shop from "../src/components/Shop";

const Task05 = () => {
  const [fields, setFields] = useState({
    minPrice: "",
    maxPrice: "",
    name: "",
  });

  const { filters } = useParams();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(
      `/task05/${fields.minPrice},${fields.maxPrice}-${fields.name}`
    );
  };

  const handleOnChange = ({ target: { name, value } }) => {
    setFields((fields) => ({ ...fields, [name]: value }));
  };

  const filterProducts = (products, filters) => {
    if (!filters) return products;

    const [price, name] = filters.split("-");
    if (!price || !name) return products;

    const [min, max] = price.split(",");
    if (!min || !max) return products;
  
    return products.filter(
      ({ price, name: productName }) =>
        price >= +min &&
        price <= +max &&
        productName.toLowerCase().includes(name.toLowerCase())
    );
  };

  return (
    <>
      <h1>Task05</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="minPrice">Min Price</label>
          <input
            id="minPrice"
            name="minPrice"
            type="number"
            required
            min={1}
            value={fields.minPrice}
            onChange={handleOnChange}
          />
        </div>

        <div>
          <label htmlFor="maxPrice">Max Price</label>
          <input
            id="maxPrice"
            name="maxPrice"
            type="number"
            required
            min={1}
            value={fields.maxPrice}
            onChange={handleOnChange}
          />
        </div>

        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            required
            minLength={3}
            value={fields.name}
            onChange={handleOnChange}
          />
        </div>

        <button type="submit">Search</button>
      </form>

      <Shop products={filterProducts(products, filters)} />
    </>
  );
};

export default Task05;
