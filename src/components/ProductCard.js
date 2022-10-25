
import Card from 'react-bootstrap/Card';
import React from 'react';
import img1 from '../images/chocolate_cake.jpg'; 
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row, Col} from "react-bootstrap";
import StarRating from './StarRating'

const ProductCard = (props) => {


    return( 
        <Card style = {{width: '18rem'}}>
            <Card.Img variant = "top" src = {img1}/>
            <Card.Body>
                <Container className = "mt-100">
                    <Card.Title>{props.title}</Card.Title>
                    <Row>
                        <Col>
                            <Card.Text>{props.price}</Card.Text>
                        </Col>
                        <Col>
                            <StarRating/>
                        </Col>
                    </Row>
                    <Card.Text>{props.shop}</Card.Text>
                </Container>
                <a href = "/product/${props.id}" className = "stretched-link" data-testid = "link"></a>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;