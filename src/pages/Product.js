import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Placeholder from "../images/placeholder.svg";

const Product = () => {
  const { id } = useParams();
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
              <Row>Product name/price</Row>
              <Row>Shop name</Row>
              <Row>Rating</Row>
              <Row>Add to cart</Row>
              <Row>Description</Row>
              <Row>Extra Information</Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Product;
