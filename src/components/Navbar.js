import { Button, Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import {
  AiOutlineShop,
  AiOutlineUser,
  AiOutlineShoppingCart,
} from "react-icons/ai";

const LowkeyNavbar = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">Lowkey</Navbar.Brand>
        <Navbar.Toggle />
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
        <Navbar.Collapse className="justify-content-end">
          <AiOutlineShop size={30} />
          <AiOutlineUser size={30} />
          <AiOutlineShoppingCart size={30} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default LowkeyNavbar;
