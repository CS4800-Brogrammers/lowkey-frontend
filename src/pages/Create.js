import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import { InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import ServerHostnameContext from "../context/ServerHostnameContext";

const Create = () => {
  const serverHostname = useContext(ServerHostnameContext);
  const navigate = useNavigate();
  const [shop, setShop] = useState(null);
  const [formValue, setformValue] = useState({
    name: "",
    price: "",
    description: "",
  });
  const [isLoading, setIsLoading] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    axios
      .post(
        `http://${serverHostname}:8000/shops/${shop[0].shop_id}/product/`,
        {
          product_name: formValue.name,
          price: formValue.price,
          description: formValue.description,
          rating: 0,
        },
        {
          headers: {
            Authorization: localStorage.getItem("authTokens")
              ? "JWT " + JSON.parse(localStorage.getItem("authTokens")).access
              : null,
          },
        }
      )
      .catch((error) => {
        //implement error handling later
      })
      .finally(() => {
        setIsLoading(false);
        // navigate("/");
      });
  };
  const handleChange = (event) => {
    setformValue({ ...formValue, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    axios
      .get(`http://${serverHostname}:8000/user/shops/?format=json`, {
        headers: {
          Authorization: localStorage.getItem("authTokens")
            ? "JWT " + JSON.parse(localStorage.getItem("authTokens")).access
            : null,
        },
      })
      .then((response) => {
        setShop(response.data);
      })
      .catch((error) => {
        navigate("/");
      })
      .finally(() => setIsLoading(false));
  });

  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <div>
      <Container>
        <Row>
          <Col></Col>
          <Col>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label> Product Name</Form.Label>
                <Form.Control
                  as="input"
                  placeholder="Enter product name"
                  id="name"
                  value={formValue.name}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Label> Product Price </Form.Label>

              <InputGroup className="mb-3">
                <InputGroup.Text>$</InputGroup.Text>
                <Form.Control
                  aria-label="formProdPrice"
                  id="price"
                  value={formValue.price}
                  onChange={handleChange}
                />
              </InputGroup>

              <Form.Group className="mb-3">
                <Form.Label> Product Description </Form.Label>
                <Form.Control
                  as="textarea"
                  aria-label="With textarea"
                  id="description"
                  value={formValue.description}
                  onChange={handleChange}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Create
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Create;
