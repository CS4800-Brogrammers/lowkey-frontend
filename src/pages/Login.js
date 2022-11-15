import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col, Button, FormSelect } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import { InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import "./Forms.css";
import AuthContext from "../context/AuthContext";
import jwt_decode from "jwt-decode";
import Error from "../components/Error";
import ServerHostnameContext from "../context/ServerHostnameContext";

const Login = () => {
  const serverHostname = useContext(ServerHostnameContext);
  const navigate = useNavigate();
  const { user, setAuthTokens, setUser } = useContext(AuthContext);
  const [formValue, setformValue] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    setformValue({ ...formValue, [event.target.id]: event.target.value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    await axios
      .post(`http://${serverHostname}:8000/api/v1/users/auth/login/`, {
        email: formValue.email,
        password: formValue.password,
      })
      .then((response) => {
        const authTokenResponse = {
          access: response.data.access_token,
          refresh: response.data.refresh_token,
        };
        setAuthTokens(authTokenResponse);
        setUser(jwt_decode(response.data.access_token));
        localStorage.setItem("authTokens", JSON.stringify(authTokenResponse));

        navigate("/");
      })
      .catch((error) => {
        // form validation based on error message
        console.log(error.response.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (user) navigate("/");
  });

  if (isLoading)
    return (
      <div>
        <Loading />
      </div>
    );
  return (
    <div>
      <Container className="form">
        <Form onSubmit={handleSubmit}>
          <Form.Label className="title"> Login </Form.Label>
          <Form.Group className="mb-3">
            <Form.Label> Email </Form.Label>
            <Form.Control
              as="input"
              id="email"
              placeholder="Enter your email"
              value={formValue.email}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label> Password </Form.Label>
            <Form.Control
              type="password"
              id="password"
              placeholder="Enter your password"
              value={formValue.password}
              onChange={handleChange}
            />
          </Form.Group>
          <p>
            Don't have an account yet?{" "}
            <span onClick={() => navigate("/register")} className="text-link">
              Register
            </span>
          </p>
          <Button variant="primary" type="submit" className="formButton">
            Login
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
