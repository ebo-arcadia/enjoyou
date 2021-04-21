import React, { Component } from 'react';
import BooksList from '../components/BooksList';
import { Form, Row, Col, Button } from 'react-bootstrap';

class Books extends Component {
    constructor() {
        super();
        this.state = { books: [], searchTerm: ""};
    }

    // componentDidMount() {
    //     let url = "https://api.giphy.com/v1/gifs/search?q=YOUR%20QUERY%20HERE&api_key=dc6zaTOxFJmzC&rating=g"
    //     fetch(url)
    //     .then(response => response.json())
    //     .then(booksData = this.state.setState({ books: booksData.data }))
    // }

    handleChange = (event) => {
        this.setState({ searchTerm: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let searchTerm = this.state.searchTerm
        this.searchBooks(searchTerm)
    }

    searchBooks = (keyword="Top pick") => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(response => response.json())
        .then(booksData => this.setState({ books: booksData.data}))
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Row>
                        <Col xs={4}>
                        <Form.Group controlId="forSearchBooks">
                            <Form.Control type="text" placeholder="search books" value={this.state.searchTerm} onChange={this.handleChange} />
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