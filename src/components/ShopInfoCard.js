import React from "react";
import Card from 'react-bootstrap/Card';
import { Container, Row, Col, Button } from "react-bootstrap";
import "./ShopInfoCard.css";

const ShopInfoCard = () => {
    return(
        // <div className="carlo"> Hello there</div>
        // <Card className="carlo">
        //     <Card.Body>
        //         <Card.Title>Card Title</Card.Title>
        //         <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        //         <Card.Text>
        //         Some quick example text to build on the card title and make up the
        //         bulk of the card's content.
        //         </Card.Text>
        //     </Card.Body>
        // </Card>

        <div class="card carlo">
            <div class="card-body">
                <h4 class="card-title"> Shop Name</h4>
                <p class="card-text">Some example text. Some example text.</p>
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
            </div>
        </div>
    );

}



export default ShopInfoCard;