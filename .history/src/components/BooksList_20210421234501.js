import React from 'react';
import { Card } from 'react-bootstrap';

const BooksList = (props) => {
    return (
            <ul className="book-list">
                <h2>searched books</h2>
                {props.result.slice(0,3).map((gif) => {
                    return (
                        <Card key={gif.id}>
                            <Card.Img className="gif" src={gif.images.original.url} alt={gif.images.original.frames} />
                        </Card>
                    )
                })}
            </ul>
            )
        }

export default BooksList;