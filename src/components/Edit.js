import axios from "axios";
import React, { useState, useContext, useParams } from 'react';
import { Modal, Button, Form, InputGroup} from "react-bootstrap";
import ServerHostnameContext from "../context/ServerHostnameContext";


const Edit= (props) =>{
    const serverHostname = useContext(ServerHostnameContext);
    const {prodDetail, trigger, closeTrigger, id}= props; 
    const [edit, setEdit] = useState({
        name: prodDetail.product_name,
        price: prodDetail.price,
        description: prodDetail.description
    });
    const editProductURL = `http://${serverHostname}:8000/product/${id}/`;

    const onClose = () =>{
        closeTrigger();
        //remove unsubmitted edits after clicking cancel/close button
        setEdit({
            name: prodDetail.product_name,
            price: prodDetail.price,
            description: prodDetail.description
        })
    };
    const handleChange = (event) =>{
        setEdit({...edit, [event.target.id]: event.target.value})
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        axios
        .patch(editProductURL, {
            product_name: edit.name,
            price: edit.price,
            description: edit.description,
        })
        .catch((error) => {
            //implement error handling later
        })
        .finally(() => {
            // closes popup after submitting but change isnt updated unless i reload the page
            // go back to fix this
            closeTrigger();
        });
    };

    if(trigger){  
        return(
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

                <Form.Group
                  className="mb-3"
                >
                  <Form.Label>Product Description</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    rows={3} 
                    id= "description"
                    value={edit.description}
                    onChange={handleChange}
                  />
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