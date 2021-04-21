import React from 'react';
import { Card } from 'react-bootstrap';

const BooksList = (props) => {
    return (
        <ul>
            <h1>Render a list of searched books below</h1>
            <Card className="mb-3" style={{ color: "#000"}}>
                <Card.Body>
                    {props.books.map((books, index) =>
                    <Card.Img src="" alt="books" />,
                    <Card.Title>{books.display_title}</Card.Title>,
                    <Card.Text>{books.headline}</Card.Text>,
                    <Card.Text>{books.summary_short}</Card.Text>
                )}
                </Card.Body>
                    </Card>
        </ul>
    );
}

export default BooksList;