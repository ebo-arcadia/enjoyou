import React, { Component } from 'react';
import BooksList from '../components/BooksList';
import { Form, Row, Col, Button } from 'react-bootstrap';

class Books extends Component {

    render() {
        return (
            <div>
                <Form>
                    <Row>
                        <Col md="auto" xs={6}>
                        <Form.Group controlId="forSearchBooks">
                            <Form.Control type="text" placeholder="search books" />
                            <Form.Text> Find books enlighening your mind! </Form.Text>
                        </Form.Group>
                        </Col>
                    </Row>
                    <Button variant="primary" type="submit">Search</Button>
                </Form>
                <BooksList />
            </div>
            
        )
    }
}

export default Books;