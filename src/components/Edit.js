import axios from "axios";
import React, { useState, useContext, useRef } from "react";
import { Modal, Button, Form, InputGroup } from "react-bootstrap";
import { AiOutlineCloudUpload } from "react-icons/ai";
import ServerHostnameContext from "../context/ServerHostnameContext";

const Edit = (props) => {
  const serverHostname = useContext(ServerHostnameContext);
  const {
    prodDetail,
    trigger,
    closeTrigger,
    id,
    onUpdateProd,
    onEditToggle,
    editToggle,
    editCounter,
    setEditCounter,
  } = props;
  const [edit, setEdit] = useState({
    name: prodDetail.product_name,
    price: prodDetail.price,
    description: prodDetail.description,
  });
  const [productPhotos, setProductPhotos] = useState(null);
  const editProductURL = `http://${serverHostname}:8000/product/${id}/`;

  const onClose = () => {
    closeTrigger();
    //Removes unsubmitted edits after clicking cancel/close button
    setEdit({
      name: prodDetail.product_name,
      price: prodDetail.price,
      description: prodDetail.description,
    });
  };
  const handleChange = (event) => {
    setEdit({ ...edit, [event.target.id]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    let formData = new FormData();
    formData.append("product_name", edit.name);
    formData.append("price", edit.price);
    formData.append("description", edit.description);
    if (productPhotos !== null) formData.append("image", productPhotos[0]);

    axios
      .patch(editProductURL, formData, {
        headers: {
          Authorization: localStorage.getItem("authTokens")
            ? "JWT " + JSON.parse(localStorage.getItem("authTokens")).access
            : null,
        },
      })
      .then((res) => {
        // onUpdateProd(res.data);
        setEditCounter(editCounter + 1);
      })
      .catch((error) => {
        //implement error handling later
      })
      .finally(() => {
        closeTrigger();
      });
  };

  //handle click to upload and trigger file input
  const fileUpload = useRef(null);
  const uploadPhotos = () => {
    fileUpload.current.click();
  };

  if (trigger) {
    return (
      <Modal show={trigger} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit the Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                as="input"
                id="name"
                value={edit.name}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Label> Product Price </Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Text>$</InputGroup.Text>
              <Form.Control
                aria-label="formProdPrice"
                id="price"
                value={edit.price}
                onChange={handleChange}
              />
            </InputGroup>

            <Form.Group className="mb-3">
              <Form.Label>Product Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                id="description"
                value={edit.description}
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
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
  return null;
};

export default Edit;
