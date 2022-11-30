import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductCard from "../components/ProductCard";
import Error from "../components/Error";
import Loading from "../components/Loading";
import CategoryCard from "../components/CategoryCard";
import ServerHostnameContext from "../context/ServerHostnameContext";

const Home = () => {
  const serverHostname = useContext(ServerHostnameContext);
  const productsURL = `http://${serverHostname}:8000/product/?format=json`;

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    axios
      .get(productsURL)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      })
      .finally(() => setIsLoading(false));
  }, [productsURL]);

  if (isLoading)
    return (
      <div>
        <Loading />
      </div>
    );
  else if (errorMessage)
    return (
      <div>
        <Error />
      </div>
    );

  const productList = products.map((product, index) => {
    return (
      <Col key={index} className="px-2 pb-3" md="auto">
        <ProductCard
          key={index}
          id={product["product_id"]}
          image={product["image"]}
          title={product["product_name"]}
          price={product["price"]}
          rating={product["rating"]}
          shop={product["shop"]}
        />
      </Col>
    );
  });

  const categories = [
    "Bakeries",
    "Jewelry",
    "Decor",
    "Accessories",
    "Art",
    "Clothing",
  ];
  const categorySection = categories.map((category, index) => {
    return (
      <Col key={index} sm={6} className="p-0">
        <CategoryCard category={category} />
      </Col>
    );
  });

  return (
    <Container fluid className="px-5">
      <Row>
        <Col className="h2 fst-italic fw-light my-5">
          Connecting small businesses to you{" "}
        </Col>
      </Row>
      <Row>
        <Col className="p-0">
          <Row className="mb-2">Your Feed</Row>
          <Row className="">{productList}</Row>
        </Col>

        <Col className="p-0 ms-5">
          <Row className="mb-2">Local Business Highlights</Row>
          <Row>{productList}</Row>
          <Row className="mb-2">Categories</Row>
          <Row>{categorySection}</Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
//use axios to get each card info denoted by id. pass all this info as props to each card
