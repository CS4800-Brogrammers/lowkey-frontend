
import Card from 'react-bootstrap/Card';
import React from 'react';
import img1 from '../images/chocolate_cake.jpg'; 
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import StarRating from './StarRating'
import "./ProductCard.css";

const ProductCard = (props) => {
    const productLink = `product/${props.id}`;
    return( 
        <Card className = 'cardWidth cardShadowHover'>
            <Card.Img variant = "top" src = {img1} className = 'imgHeight'/>
            <Card.Body className = "p-0">
                <Container className = "p-0">
                    <Card.Title>{props.title}</Card.Title>
                    <Row>
                        <Col className = "me-1">
                            <Card.Text>{props.price}</Card.Text>
                        </Col>
                        <Col>
                            <StarRating rating = "5"/>
                        </Col>
                    </Row>
                    <Card.Text>{props.shop}</Card.Text>
                </Container>
                <Link to = {productLink} className = "stretched-link" data-testid = "link"/>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;