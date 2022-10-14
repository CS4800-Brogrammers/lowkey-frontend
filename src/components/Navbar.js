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

const LowkeyNavbar = () => {
  return (
    <Navbar expand = "sm">
      <Container>
        <Navbar.Brand href="/">Lowkey</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id = "basic-navbar-nav" className="justify-content-end">
          <Nav className="me-auto justify-content-center" >
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">
                <AiOutlineSearch size={30} />
              </Button>
            </Form>
          </Nav>
          <Nav>
            <Nav.Link href="Create" className = "nav-link active">
              <AiOutlineShop size={30} />
            </Nav.Link>
            <Nav.Link href = "User">
              <AiOutlineUser size={30} />
            </Nav.Link>
            <Nav.Link href = "Cart">
              <AiOutlineShoppingCart size={30} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default LowkeyNavbar;
