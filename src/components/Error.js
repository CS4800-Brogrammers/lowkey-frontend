import ErrorImage from "../images/404.svg";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./components.module.css";

const { mainContainer } = styles;

const Error = () => {
  return (
    <div className={mainContainer}>
      <Container className="d-flex h-100 justify-content-center align-items-center">
        <img src={ErrorImage} alt="404 error" />
      </Container>
    </div>
  );
};

export default Error;
