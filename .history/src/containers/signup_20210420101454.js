import React from 'react';

const Signup = () => {
    return (
        <div>
            <header className="App-header">
                <Container fluid>
                    <Form>
                        <Row>
                            <Col md>
                                <Form.Group controlId="forEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="example@email.com" />
                                    <Form.Text>
                                        Sign up with your email
                                    </Form.Text>
                                </Form.Group>
                            </Col>

                            <Col md>
                                <Form.Group controlId="forPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="email" placeholder="password" />
                                    <Form.Text>
                                        create a password
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

                    <Button variant="primary">Bootstrap Imported Button</Button>
                    <Alert variant="success">This is an alert</Alert>

                </Container>
        </header>
        </div>
    );
}

export default Signup;