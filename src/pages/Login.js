import axios from "axios";
import React, { useState } from "react";
import {Container, Row, Col, Button, FormSelect} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form'
import { InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import "./Forms.css";

const Login = () => {
    const[formValue, setformValue]= useState({
        email:'',
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
        <Container className="form">
        <Form onSubmit={handleSubmit}>
              <Form.Label className="title"> Login </Form.Label>
              <Form.Group className ="mb-3">
                <Form.Label> Email </Form.Label>
                <Form.Control as= "input" id= "email" value={formValue.email} 
                onChange={handleChange}/>
              </Form.Group>
              <Form.Group className ="mb-3">
                <Form.Label> Password </Form.Label>
                <Form.Control type= "password" id= "password" value={formValue.password} 
                onChange={handleChange}/>
              </Form.Group>
            
              <Button variant="primary" type="submit" className="formButton">
                Login
              </Button>
            </Form>

        </Container>

    </div>
    ); 
};

export default Login;