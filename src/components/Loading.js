import LoadingSpinner from "../images/loading.svg";
import styles from "./components.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

const { mainContainer } = styles;

const Loading = () => {
  return (
    <div className={mainContainer}>
      <Container className="d-flex h-100 justify-content-center align-items-center">
        <img src={LoadingSpinner} width="50rem" alt="404 error" />
      </Container>
    </div>
  );
};

export default Loading;
