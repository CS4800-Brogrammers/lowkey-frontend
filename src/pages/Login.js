import axios from "axios";
import React, { useState } from "react";
import {Container, Row, Col, Button} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form'
import { InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

const Login = () => {
    const[formValue, setformValue]= useState({
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
        <Form onSubmit={handleSubmit}> Login 
              <div className= "mb-3"></div>
              <Form.Group className ="mb-3">
                <Form.Label> Username </Form.Label>
                <Form.Control as= "input" placeholder="Enter username" id= "username" value={formValue.username} 
                onChange={handleChange}/>
              </Form.Group>
              <Form.Group className ="mb-3">
                <Form.Label> Password </Form.Label>
                <Form.Control type= "password" placeholder="Enter password" id= "password" value={formValue.password} 
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

export default Login;