import React from 'react';
import { Card } from 'react-bootstrap';

const BooksList = (props) => {
    return (
        <ul className="book-list">
            {/* <h1>Render a list of searched books below</h1>
            {props.books.map((book, index) => 
                <li key={index} className="review">
                    <h1>{book.display_title}</h1>
                    <h2>{book.headline}</h2>
                    <h2>{book.summary_short}</h2>
                </li>
            )} */}
            <Card className="mb-3" style={{ color: "#000"}}>
            <Card.Body>
                    {props.books.map((book, index) => {
                        <Card.Img src="" alt="books" />,
                        <Card.Title key={index} >{book.display_title}</Card.Title>,
                        <Card.Text>{book.headline}</Card.Text>,
                        <Card.Text>{book.summary_short}</Card.Text>
                    }
                )}
                </Card.Body>
            </Card>
        </ul>
    );
}

export default BooksList;