import axios from "axios";
import React from "react";
import {Container, Row, Col, Button} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form'
import { InputGroup } from "react-bootstrap";

const Create = () => {
  return (
    <div>
      <Container>
        
        <Row>
          <Col>Image should go here

          </Col>
          <Col>
            <Form>
              <Form.Group controlId="formProdName">
                <Form.Label> Product Name</Form.Label>
                <Form.Control as= "input" placeholder="Enter product name" />
              </Form.Group>
              <Form.Label> Product Price </Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Text>$</InputGroup.Text>
                <Form.Control aria-label="formProdPrice" />
              </InputGroup>
              <Form.Group controlId="formProdDescr">
                <Form.Label> Product Description </Form.Label>
                <Form.Control as="textarea" aria-label="With textarea"  />
              </Form.Group>
              <Button variant="primary" type="submit">
                Create
              </Button>
            </Form>
          </Col>
        </Row>

      </Container>
      
    </div>
  );
};

export default Create;
