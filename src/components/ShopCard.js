import Card from "react-bootstrap/Card";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import StarRating from "./StarRating";
import "./ProductCard.css";





const ShopCard = (props) => {
    const productLink = `shops/${props.id}`;
    return( 
        <Card className = 'cardWidth cardShadowHover'>
            <Card.Img variant="top" src={props.image} className="imgHeight" />
            <Card.Body className = "p-0">
                <Container className = "p-0">
                    <Card.Title>{props.title}</Card.Title>
                    <Row>
                        <StarRating rating = "5" starSize= "15" ratingColor= "#ffc107"/>
                    </Row>
                    <Card.Text>{props.shop}</Card.Text>
                </Container>
                <Link to = {productLink} className = "stretched-link"/>
            </Card.Body>
        </Card>
    );
};

export default ShopCard;
