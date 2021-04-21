import React from 'react';
import { Card } from 'react-bootstrap';

const BooksList = () => {
    return (
        <div>
            <h1>Render a list of the books here!</h1>
            <Card className="mb-3" style={{ color: "#000"}}>
                    <Card.Img src="../assets/logo.png" alt="books"/>
                    <Card.Body>
                        <Card.Title>Book list (Card Title)</Card.Title>
                        <Card.Text>All books (Card text)</Card.Text>
                    </Card.Body>
                    </Card>
        </div>
    );
}

export default BooksList;