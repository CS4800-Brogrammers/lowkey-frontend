import React, {useState} from 'react';
import { Button, Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {
  AiOutlineShop,
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineSearch,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const LowkeyNavbar = () => {
  const [activePage, setActivePage] = useState(null);

  return (
    <Navbar expand="sm" className = "mb-4 pb-3 border-bottom">
      <Container>
        <Navbar.Brand 
        as={Link} 
        to="/"
        onClick = {() => setActivePage("/")} 
        className = {activePage === "Create" ? 'active' : 'inactive'}
        >
          Lowkey
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search" 
              />
              <Button variant="outline-success" onClick = {() => setActivePage("Search")}>
                <AiOutlineSearch size={30} />
              </Button>
            </Form>
          </Nav>
          <Nav>
            <Nav.Link 
              as={Link} 
              to="/Create" 
              onClick = {() => setActivePage("Create")} 
              className = {activePage === "Create" ? 'active' : 'inactive'}
              >
              <AiOutlineShop size={30} />
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/User" 
              onClick = {() => setActivePage("User")}
              className = {activePage === "User" ? 'active' : 'inactive'}
              >
              <AiOutlineUser size={30} />
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/Cart" 
              onClick = {() => setActivePage("Cart")}
              className = {activePage === "Cart" ? 'active' : 'inactive'}
              >
              <AiOutlineShoppingCart size={30} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default LowkeyNavbar;
