import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import { InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import ServerHostnameContext from "../context/ServerHostnameContext";
import { AiOutlineCloudUpload } from "react-icons/ai";
import './CreateShop.css';

const Create = () => {
  const serverHostname = useContext(ServerHostnameContext);
  const navigate = useNavigate();
  const [shop, setShop] = useState(null);
  const [formValue, setformValue] = useState({
    name: "",
    price: "",
    description: "",
  });
  const [productPhotos, setProductPhotos] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    let formData = new FormData();
    formData.append("product_name", formValue.name);
    formData.append("price", formValue.price);
    formData.append("description", formValue.description);
    formData.append("rating", 0);
    if (productPhotos !== null) formData.append("image", productPhotos[0]);

    axios
      .post(
        `http://${serverHostname}:8000/shops/${shop[0].shop_id}/product/`,
        formData,
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

  //handle click to upload and trigger file input
  const fileUpload = useRef(null);
  const uploadPhotos = () => {
    fileUpload.current.click();
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
  }, []);

  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <Container className="forms p-5 mt-3">
     <Row className="mb-5">
        <h1>Create a Product</h1>
      </Row>
      <Row>
        <Form onSubmit={handleSubmit} >
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

        <Form.Group className="mb-3" controlId="photos">
          <Form.Label>Show off your product with photos</Form.Label>
          <div className="upload" onClick={uploadPhotos}>
            <AiOutlineCloudUpload id="icon" size="30" />
            <p>Browse Files to Upload</p>
            <Form.Control
              ref={fileUpload}
              type="file"
              multiple
              hidden
              onChange={(e) => setProductPhotos(e.target.files)}
            />
          </div>
        </Form.Group>

        <Button variant="primary" type="submit">
          Create
        </Button>
        </Form>
      </Row>

    </Container>
    
  );
};

export default Create;
