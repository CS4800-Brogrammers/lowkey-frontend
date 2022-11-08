import React, {useState, useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Form, Button, Container, Row} from 'react-bootstrap'
import "./CreateShop.css";
import PhotoUploader from '../components/PhotoUploader';
import axios from 'axios';

const shopsURL = "http://127.0.0.1:8000/shop/";

const CreateShop = () => {
    const [post, setPost] = useState(null);

    const handleSubmit = () => {
        
    }

    return (
        <Container className = "form p-5">
            <Row className = "mb-5">
                <h1>Create Your Shop</h1>
            </Row>
            <Form>
                <Form.Group className="mb-4" controlId="ShopName">
                    <Form.Label>Name Your Shop</Form.Label>
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