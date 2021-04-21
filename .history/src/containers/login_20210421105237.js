import React from 'react';
import { Row, Col, Button, Alert, Form } from 'react-bootstrap';

const Login = () => {
    return (
        <div>
            <header className="App-header">
                <Form>
                <Row>
                    <Col md>
                    <Form.Group controlId="forEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="example@email.com" />
                        <Form.Text>
                        Your email will be kept confidential!
                        </Form.Text>
                    </Form.Group>
                    </Col>

                    <Col md>
                    <Form.Group controlId="forPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="email" placeholder="password" />
                    <Form.Text>
                        Your password will be kept confidential!
                    </Form.Text>
                    </Form.Group>
                    </Col>
                </Row>
                <Button variant="primary" type="submit">Login</Button>
                <Alert variant="success">You are logged in!</Alert>
                </Form>
            </header>
        </div>
    );
}

export default Login;