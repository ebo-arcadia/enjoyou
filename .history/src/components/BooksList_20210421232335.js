import React from 'react';
// import { Card } from 'react-bootstrap';

const BooksList = (props) => {
    return (
            <ul className="book-list">
                <h2>Books</h2>
                {props.result.slice(0,3).map((gif) => {
                    return (
                        <li key={gif.id}>
                            <img className="gif" src={gif.images.original.url} alt={gif.images.original.frames}></img>
                        </li>
                    )
                })}
            </ul>
            )
        }

export default BooksList;