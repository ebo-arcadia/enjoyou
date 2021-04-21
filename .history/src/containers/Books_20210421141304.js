import React, { Component } from 'react';
import BooksList from '../components/BooksList';
import { Form, Row, Col, Button } from 'react-bootstrap';

class Books extends Component {

    const [book, setBook] = useState("");
    

    function handleChange(event) {

    }

    function handleSubmit(event) {

    }

    render() {
        return (
            <div>
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col xs={4}>
                        <Form.Group controlId="forSearchBooks">
                            <Form.Control type="text" placeholder="search books" onChange={handleChange} />
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