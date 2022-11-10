import { useContext, useEffect } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const User = () => {
  const navigate = useNavigate();
  const { user, setUser, setAuthTokens } = useContext(AuthContext);

  const handleSubmit = (event) => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");

    navigate("/");
  };

  useEffect(() => {
    if (!user) navigate("/login");
  });

  return (
    <Container>
      <Row>This is the user page</Row>
      <Row>
        <Button onClick={handleSubmit}>Logout</Button>
      </Row>
    </Container>
  );
};

export default User;
