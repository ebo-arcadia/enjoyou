import React, { Component } from 'react';
import BooksList from '../components/BooksList';
import { Form, Row, Col, Button } from 'react-bootstrap';

class Books extends Component {
    constructor() {
        super();
        this.state = { books: [], searchTerm: ""};
    }

    handleChange = (event) => {
        this.setState({ searchTerm: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let searchTerm = this.state.searchTerm
        this.searchBooks(searchTerm)
    }

    searchBooks = (searchTerm="Top pick") => {
        fetch()
        .then(response => response.json())
        .then(books => this.setState({ books: books}))
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