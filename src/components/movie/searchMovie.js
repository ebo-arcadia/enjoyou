import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class searchMovie extends Component {
    render() {
        return (
            <div>
                <Form>
                    <Form.Group controlId="formSearch">
                        <Form.Label>Ready to find your next binge watch?</Form.Label>
                        <Form.Control style={{width: 400 }} size="lg" type="text" placeholder="find a movie" />
                        <Form.Text className="text-muted">
                        here goes nothing!
                        </Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Search
                    </Button>
                </Form>
            </div>
        )
    }
}

export default searchMovie;

