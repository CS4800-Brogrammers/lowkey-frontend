import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import Error from "../components/Error";
import Edit from "../components/Edit";
import Loading from "../components/Loading";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import StarRating from "../components/StarRating";
import styles from "./Product.module.css";
import Delete from "../components/Delete";
import ServerHostnameContext from "../context/ServerHostnameContext";
import "./Formats.css";
const {
  mainContainer,
  productHeader,
  productText,
  productRowSpacing,
  addToCartCounter,
  counterButton,
  addToCartButton,
  button,
} = styles;
const Product = (props) => {
  const [product, setProduct] = useState(null);
  const [shop, setShop] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [deleteRequest, setDeleteRequest] = useState(false);
  const [popup, setPopup] = useState(false);
  const [counter, setCounter] = useState(1);
  const [editCounter, setEditCounter] = useState(0);
  const { id } = useParams();

  const navigate = useNavigate();
  const serverHostname = useContext(ServerHostnameContext);
  const getProductURL = `http://${serverHostname}:8000/product/${id}/?format=json`;
  const getUserShopURL = `http://${serverHostname}:8000/user/shops/?format=json`;
  const deleteProductURL = `http://${serverHostname}:8000/product/${id}/`;

  const handleCancel = () => {
    setDeleteRequest(false);
  };

  const handleDelete = () => {
    axios
      .delete(deleteProductURL, {
        headers: {
          Authorization: localStorage.getItem("authTokens")
            ? "JWT " + JSON.parse(localStorage.getItem("authTokens")).access
            : null,
        },
      })
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
      .all([
        axios.get(getProductURL),
        axios.get(getUserShopURL, {
          headers: {
            Authorization: localStorage.getItem("authTokens")
              ? "JWT " + JSON.parse(localStorage.getItem("authTokens")).access
              : null,
          },
        }),
      ])
      .then(
        axios.spread((response1, response2) => {
          setProduct(response1.data);
          setShop(response2.data);
        })
      )
      .catch((error) => {
        setErrorMessage(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [editCounter]);

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
          <Col sm={6} className="d-flex align-items-center">
            <Image className="img-fluid" src={product.image} />
          </Col>
          <Col sm={6} className="d-flex align-items-center">
            <Container className={productText}>
              <Row className={productHeader}>
                <Row>{product.product_name}</Row> <Row>${product.price}</Row>
              </Row>
              <Row className={productRowSpacing}>Brogrammers</Row>
              <StarRating rating={product.rating} size={30} />
              <Row className={productRowSpacing}>
                <Col className="d-flex align-items-center justify-content-center">
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
                <Col className={addToCartButton}>
                  <Button>Add to Cart</Button>
                </Col>
              </Row>
              <Row className={productRowSpacing}>
                Description: {product.description}
              </Row>
              {/* <Row>Extra Information</Row> */}
              {shop[0] && shop[0].shop_id === product.shop_id && (
                <Row
                  className={`${productRowSpacing} d-flex justify-content-center`}
                >
                  <Col>
                    <Button className={button} onClick={() => setPopup(true)}>
                      Edit
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      className={button}
                      variant="danger"
                      onClick={() => setDeleteRequest(true)}
                    >
                      Delete
                    </Button>
                  </Col>
                </Row>
              )}
            </Container>
          </Col>
        </Row>
      </Container>
      <Edit
        prodDetail={product}
        trigger={popup}
        closeTrigger={() => setPopup(false)}
        id={id}
        onUpdateProd={setProduct}
        editCounter={editCounter}
        setEditCounter={setEditCounter}
      />
    </div>
  );
};

export default Product;
