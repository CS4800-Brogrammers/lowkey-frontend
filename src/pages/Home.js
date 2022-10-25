import axios from "axios";
import React, { useEffect, useState } from "react";
import {Container, Row, Col} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductCard from "../components/ProductCard";


const Home = () => {
  const [id, setId] = useState(null);
  const [productName, setProductName] = useState(null);
  const [price, setPrice] = useState(null);
  const [rating, setRating] = useState(null);
  const [shop, setShop] = useState(null);

  const productsURL = "http://127.0.0.1:8000/product/1/?format=json";
  useEffect(() => {
    axios.get(productsURL).then((response) => {
      setId(response.data['product_id']); 
      setProductName(response.data['product_name']);
      setPrice(response.data['price']);
      setRating("5");
      setShop("Garrett's Bakery");
    });
  }, []);
  
  return(
    <Container> 
      <Row >
        <Col className = "h2 fst-italic fw-light my-5 ">Connecting small businesses to you </Col>
      </Row>
      <ProductCard id = {id} title = {productName} price = {price} rating = {rating} shop = {shop}/>
    </Container>

    
  );
  
};

export default Home;
//use axios to get each card info denoted by id. pass all this info as props to each card 