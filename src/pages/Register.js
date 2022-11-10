import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import "./Forms.css";
import AuthContext from "../context/AuthContext";
import jwt_decode from "jwt-decode";
import Error from "../components/Error";

const Register = () => {
  const { user, setAuthTokens, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formValue, setformValue] = useState({
    email: "",
    username: "",
    password: "",
    rePassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleChange = (event) => {
    setformValue({ ...formValue, [event.target.id]: event.target.value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    await axios
      .post("http://127.0.0.1:8000/api/v1/users/auth/register/", {
        username: formValue.username,
        email: formValue.email,
        password1: formValue.password,
        password2: formValue.rePassword,
      })
      .then((response) => {
        const authTokenResponse = {
          access: response.data.access_token,
          refresh: response.data.refresh_token,
        };
        setAuthTokens(authTokenResponse);
        setUser(jwt_decode(response.data.access_token));
        localStorage.setItem("authTokens", JSON.stringify(authTokenResponse));
      })
      .catch((error) => {
        setErrorMessage(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
    if (!errorMessage) navigate("/");
    else {
      // form validation based on error message
      console.log(errorMessage);
    }
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
          <Form.Label className="title">Register</Form.Label>
          <Form.Group className="mb-3">
            <Form.Label> Email </Form.Label>
            <Form.Control
              htmlSize="5"
              placeholder="Enter a valid email"
              as="input"
              id="email"
              value={formValue.email}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label> Username </Form.Label>
            <Form.Control
              as="input"
              placeholder="Create new username"
              id="username"
              value={formValue.username}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label> Password </Form.Label>
            <Form.Control
              type="password"
              placeholder="Create new password"
              id="password"
              value={formValue.password}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label> Re-enter password </Form.Label>
            <Form.Control
              type="password"
              id="rePassword"
              placeholder="Re-enter password"
              value={formValue.rePassword}
              onChange={handleChange}
            />
          </Form.Group>
          <p>
            Already have an account?{" "}
            <span onClick={() => navigate("/login")} className="text-link">
              Login
            </span>
          </p>
          <Button className="formButton" variant="primary" type="submit">
            Register
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Register;
