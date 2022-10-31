import axios from "axios";
import React, { useState } from "react";
import {Container, Row, Col, Button} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form'
import { InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
// business picture, Business name, descr, contact info,  

const CreateAccount = () => {
    const[formValue, setformValue]= useState({
        firstname:'',
        lastname:'',
        username:'',
        password:'',
      });

    const handleChange= (event) =>{
    setformValue(
    {...formValue, [event.target.id]: event.target.value})
    }
    const handleSubmit= () =>{
        // add logic once backend adds account list
    }
    return(
    <div>
        <Container>
        <Form onSubmit={handleSubmit}> Create Your Account 
              <div className= "mb-3"></div>
              <Form.Group className ="mb-3">
                <Form.Label> First Name </Form.Label>
                <Form.Control as= "input" id= "firstname" value={formValue.firstname} 
                onChange={handleChange}/>
              </Form.Group>
              <Form.Group className ="mb-3">
                <Form.Label> Last Name </Form.Label>
                <Form.Control as= "input" id= "lastname" value={formValue.lastname} 
                onChange={handleChange}/>
              </Form.Group>
              <Form.Group className ="mb-3">
                <Form.Label> Username </Form.Label>
                <Form.Control as= "input" placeholder="Create new username" id= "username" value={formValue.username} 
                onChange={handleChange}/>
              </Form.Group>
              <Form.Group className ="mb-3">
                <Form.Label> Password </Form.Label>
                <Form.Control type= "password" placeholder="Create new password" id= "password" value={formValue.password} 
                onChange={handleChange}/>
              </Form.Group>
            
              <Button variant="primary" type="submit">
                Create
              </Button>
            </Form>

        </Container>

    </div>
    ); 
};

export default CreateAccount;