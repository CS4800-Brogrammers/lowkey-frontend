import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import Error from "../components/Error";
import Loading from "../components/Loading";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import StarRating from "../components/StarRating";

import img1 from "../images/chocolate_cake.jpg";

import styles from "./Product.module.css";
import Delete from "../components/Delete";
import ServerHostnameContext from "../context/ServerHostnameContext";
const {
  mainContainer,
  productImage,
  productHeader,
  productText,
  productRowSpacing,
  addToCartCounter,
  counterButton,
  button,
} = styles;

const Product = (props) => {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [deleteRequest, setDeleteRequest] = useState(false);
  const [counter, setCounter] = useState(1);
  const { id } = useParams();

  const navigate = useNavigate();
  const serverHostname = useContext(ServerHostnameContext);
  const getProductURL = `http://${serverHostname}:8000/product/${id}/?format=json`;
  const deleteProductURL = `http://${serverHostname}:8000/product/${id}/`;

  const handleCancel = () => {
    setDeleteRequest(false);
  };

  const handleDelete = () => {
    axios
      .delete(deleteProductURL)
      .catch((error) => {
        setErrorMessage(error.message);
      })
      .finally(() => {
        setIsLoading(false);
        navigate("/");
      });
  };

  useEffect(() => {
    axios
      .get(getProductURL)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      })
      .finally(() => setIsLoading(false));
  }, [getProductURL]);

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
  else if (deleteRequest) {
    return (
      <div>
        <Delete handleCancel={handleCancel} handleDelete={handleDelete} />
      </div>
    );
  }
  return (
    <div className={mainContainer}>
      <Container className="mt-5">
        <Row>
          <Col sm={6} className="d-flex align-items-center  ">
            <img className={productImage} src={img1} alt="product"></img>
          </Col>
          <Col sm={6} className="d-flex align-items-center">
            <Container className={productText}>
              <Row className={productHeader}>
                <Row>{product.product_name}</Row> <Row>${product.price}</Row>
              </Row>
              <Row className={productRowSpacing}>Brogrammers</Row>
              <StarRating />
              <Row className={productRowSpacing}>
                <Col>
                  <div className={addToCartCounter}>
                    <Button
                      variant="danger"
                      className={counterButton}
                      onClick={() =>
                        setCounter(counter - 1 <= 0 ? 0 : counter - 1)
                      }
                    >
                      <AiOutlineMinus size={20} />
                    </Button>
                    <div>{counter}</div>
                    <Button
                      variant="success"
                      className={counterButton}
                      onClick={() => setCounter(counter + 1)}
                    >
                      <AiOutlinePlus size={20} />
                    </Button>
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
              <Row
                className={`${productRowSpacing} d-flex justify-content-center`}
              >
                <Button
                  className={button}
                  variant="danger"
                  onClick={() => setDeleteRequest(true)}
                >
                  Delete
                </Button>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Product;
