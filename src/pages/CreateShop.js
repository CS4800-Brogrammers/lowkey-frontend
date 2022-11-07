import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Form, Button, Container} from 'react-bootstrap'
import "./CreateShop.css";
import PhotoUploader from '../components/PhotoUploader';

const CreateShop = () => {
  
    return (
        <Container className = "form p-5">
            <Form>
                <Form.Group className="mb-4" controlId="ShopName">
                    <Form.Label>Shop Name</Form.Label>
                    <Form.Control type = "text"/>
                </Form.Group>
                <Form.Group className="mb-4" controlId="ShopAddress">
                    <Form.Label>Shop Address</Form.Label>
                    <Form.Control type = "text"/>
                </Form.Group>
                <Form.Group className="mb-4" controlId="ShopDescription">
                    <Form.Label>Shop Description</Form.Label>
                    <Form.Control type = "text" placeholder = "Let customers know a little bit about your shop"/>
                </Form.Group>
                <PhotoUploader label = "Add photos of your shop!"/>
                <Button variant="primary" type="submit">
                    Create Shop
                </Button>
            </Form>
        </Container>
      );
};
export default CreateShop; 