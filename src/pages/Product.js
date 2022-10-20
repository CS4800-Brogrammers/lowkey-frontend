import { useParams } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import Placeholder from "../images/placeholder.svg";
import axios from "axios";
import { useState, useEffect } from "react";
import Error from "../components/Error";
import Loading from "../components/Loading";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import styles from "./Product.module.css";
const {
  mainContainer,
  productHeader,
  productText,
  productRowSpacing,
  addToCartCounter,
  counterButton,
} = styles;

const Product = () => {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [counter, setCounter] = useState(1);
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
  }, [url]);

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

  return (
    <div className={mainContainer}>
      <Container className="mt-5">
        <Row>
          <Col>
            <img src={Placeholder} alt="product"></img>
          </Col>
          <Col>
            <Container className={productText}>
              <Row className={productHeader}>
                <Row>{product.product_name}</Row> <Row>${product.price}</Row>
              </Row>
              <Row className={productRowSpacing}>Brogrammers</Row>
              <Row className={productRowSpacing}>Rating</Row>
              <Row className={productRowSpacing}>
                <Col>
                  <div className={addToCartCounter}>
                    <div
                      className={counterButton}
                      onClick={() =>
                        setCounter(counter - 1 <= 0 ? 0 : counter - 1)
                      }
                    >
                      <AiOutlineMinus />
                    </div>
                    <div>{counter}</div>
                    <div
                      className={counterButton}
                      onClick={() => setCounter(counter + 1)}
                    >
                      <AiOutlinePlus />
                    </div>
                  </div>
                </Col>
                <Col>
                  <Button>Add to Cart</Button>
                </Col>
              </Row>
              <Row className={productRowSpacing}>
                Desciption: {product.description}
              </Row>
              {/* <Row>Extra Information</Row> */}
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Product;
