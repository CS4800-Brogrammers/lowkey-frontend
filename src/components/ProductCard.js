
import Card from 'react-bootstrap/Card';
import React from 'react';
import img1 from '../images/chocolate_cake.jpg'; 
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row, Col} from "react-bootstrap";
import StarRating from './StarRating'

const ProductCard = () => {
    return( 
        <Card style = {{width: '18rem'}}>
            <Card.Img variant = "top" src = {img1}/>
            <Card.Body>
                <Container>
                    <Card.Title>Chocolate Cake</Card.Title>
                    <Row>
                        <Col>
                            <Card.Text>$21.99</Card.Text>
                        </Col>
                        <Col>
                            <StarRating/>
                        </Col>
                    </Row>
                    
                    <Card.Text>Garrett's Bakery</Card.Text>
                </Container>
                
                {/* <a href = "/product/:id" className = "stretched-link"></a> */}
            </Card.Body>
        </Card>
    );
};

export default ProductCard;