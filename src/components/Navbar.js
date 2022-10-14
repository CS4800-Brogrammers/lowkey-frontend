import { Button, Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {
  AiOutlineShop,
  AiOutlineUser,
  AiOutlineShoppingCart,
} from "react-icons/ai";

const LowkeyNavbar = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="/">Lowkey</Navbar.Brand>
        <Navbar.Toggle />

        <Navbar.Collapse className="justify-content-end">
          <Nav className="me-auto">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Nav>
          <Nav>
            <Nav.Link>
              <AiOutlineShop size={30} />
            </Nav.Link>
            <Nav.Link>
              <AiOutlineUser size={30} />
            </Nav.Link>
            <Nav.Link>
              <AiOutlineShoppingCart size={30} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default LowkeyNavbar;
