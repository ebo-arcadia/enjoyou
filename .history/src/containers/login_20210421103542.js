import React from 'react';
import { Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap';

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
                            Your email will be kept confidential!
                        </Form.Text>
                        </Form.Group>
                        </Col>
                    </Row>
                    <Button variant="secondary" type="submit">Login</Button>
                    </Form>

                    <Card className="mb-3" style={{ color: "#000"}}>
                    <Card.Img />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>This is a card text</Card.Text>
                    </Card.Body>
                    </Card>
                
                    <Breadcrumb>
                    <Breadcrumb.Item>Tab 1</Breadcrumb.Item>
                    <Breadcrumb.Item>Tab 2</Breadcrumb.Item>
                    <Breadcrumb.Item active>Tavb 3</Breadcrumb.Item>
                    </Breadcrumb>
                    <Button variant="primary">Log in</Button>
                    <Alert variant="success">This is an alert</Alert>
            </header>
        </div>
    );
}

export default Login;