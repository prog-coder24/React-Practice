import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

const FormComponent = () => {
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Your email is " + email);
    console.log("Your password is " + passwd);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPasswd(value);
        break;
      default:
        return null;
    }
  };

  return (
    <Container>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={handleInputChange}
            name="email"
          />
          <Form.Text className="text-muted">{email}</Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={handleInputChange}
            name="password"
          />
        </Form.Group>
        {passwd}
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={handleSubmit}
          name="submit-button"
        >
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default FormComponent;
