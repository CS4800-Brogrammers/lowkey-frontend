import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Placeholder from "../images/placeholder.svg";
import axios from "axios";
import { useState, useEffect } from "react";

const Product = () => {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const { id } = useParams();
  const url = `http://127.0.0.1:8000/product/${id}/?format=json`;

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        setProduct(response.data);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <div>Loading...</div>;
  else if (errorMessage) return <div>{errorMessage}</div>;

  return (
    <div>
      This is the page for the product with an id of {id}
      <Container className="mt-5">
        <Row>
          <Col>
            <img src={Placeholder} alt="product"></img>
          </Col>
          <Col>
            <Container>
              <Row>
                {product.product_name} | {product.price}
              </Row>
              <Row>Shop name</Row>
              <Row>Rating</Row>
              <Row>Add to cart</Row>
              <Row>{product.description}</Row>
              <Row>Extra Information</Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Product;
