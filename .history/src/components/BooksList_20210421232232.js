import React from 'react';
// import { Card } from 'react-bootstrap';

const BooksList = () => {
    return (
            <ul className="book-list">
                <h2>List of gif pictures</h2>
                {result.slice(0,3).map((gif) => {
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