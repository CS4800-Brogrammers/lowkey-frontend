import axios from "axios";
import React, { useState } from "react";
import {Container, Row, Col, Button} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form'
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
// business picture, Business name, descr, contact info,  
import "./Forms.css";

const Register = () => {
    const[formValue, setformValue]= useState({
        email:'',
        username:'',
        password:'',
        rePassword:''
      });

    const handleChange= (event) =>{
    setformValue(
    {...formValue, [event.target.id]: event.target.value})
    }
    const handleSubmit= () =>{
        // add logic once backend adds account list
    }
    return(
    <div >
        <Container className="form" >
          <Form onSubmit={handleSubmit} >
              <Form.Label className="title"> Create Your Account </Form.Label>
              <Form.Group className= "mb-3">
                <Form.Label> Email </Form.Label>
                <Form.Control htmlSize= '5' placeholder="Enter a valid email" as= "input" id= "email" value={formValue.email} 
                onChange={handleChange}/>
              </Form.Group>
              <Form.Group className ="mb-3">
                <Form.Label> Username </Form.Label>
                <Form.Control as= "input" placeholder="Create new username" id= "username" value={formValue.username} 
                onChange={handleChange}/>
              </Form.Group>
              <Form.Group className ="mb-3">
                <Form.Label> Password </Form.Label>
                <Form.Control as= "input" placeholder="Create new password" id= "password" value={formValue.password} 
                onChange={handleChange}/>
              </Form.Group>
              <Form.Group className ="mb-3">
                <Form.Label> Re-enter password </Form.Label>
                <Form.Control type= "password" id= "rePassword" value={formValue.rePassword} 
                onChange={handleChange}/>
              </Form.Group>
            
              <Button className="formButton" variant="primary" type="submit">
                Register
              </Button>
          </Form>
        </Container>

    </div>
    ); 
};

export default Register;