import axios from "axios";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductCard from "../components/ProductCard";
const Home = () => {
  return <ProductCard/>;
};

export default Home;
//use axios to get each card info denoted by id. pass all this info as props to each card 