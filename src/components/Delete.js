import { Button, Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./components.module.css";
import "./Delete.css";

const { mainContainer } = styles;

const Delete = (props) => {
  return (
    <div className={mainContainer}>
      <Container className="d-flex h-100 justify-content-center align-items-center">
        <Container>
          <Row>
            <h2>Are you sure you want to delete this product?</h2>
          </Row>
          <Row>
            <div className="buttons">
              <Button
                size="lg"
                variant="secondary"
                onClick={props.handleCancel}
              >
                Cancel
              </Button>
              <Button size="lg" variant="danger" onClick={props.handleDelete}>
                Delete
              </Button>
            </div>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Delete;
