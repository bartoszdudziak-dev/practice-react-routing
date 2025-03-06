import React from 'react';
import { Route } from "react-router-dom";
import Home from "../src/components/Home";
import Contact from "../src/components/Contact";

const Task01 = () => {
  return (
    <>
      <h1>Task01</h1>
      <Route path="/task01/home" component={Home} />
      <Route path="/task01/contact" component={Contact} />
    </>
  );
};

export default Task01;

