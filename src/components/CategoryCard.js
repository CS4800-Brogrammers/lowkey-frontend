import Card from 'react-bootstrap/Card';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";


const CategoryCard = (props) => {
   
    return( 
        <Card style = {{height: "5rem"}}>
            <Card.Body><h4>{props.category}</h4></Card.Body>
        </Card>
    );
};

export default CategoryCard;