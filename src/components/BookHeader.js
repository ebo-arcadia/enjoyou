import React from 'react';
import "../book.css";
import { InputGroup, FormControl, FormGroup, FormLabel, Form, Col, Button } from 'react-bootstrap'
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookHeader = () => {

    const [maxResults, setMaxResults] = useState(10)
    const [startIndex, setStartIndex] = useState(1)
    const [query, setQuery] = useState('')
    const [loading, setLoading] = useState(false)
    const [cards, setCards] = useState([])

    const handleSubmit = () => {
        setLoading(true);
        if (maxResults > 30 || maxResults < 1) { 
            toast.error('max results must be between 1 and 30');
        } else {
            fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=${maxResults}&startIndex=${startIndex}`
            ).then(response => response.json()
            ).then(booksData => {
                if (startIndex >= booksData.totalItems || startIndex < 1) {
                    toast.error( `max book items must be between 1 and ${booksData.totalItems}` );
                } else { 
                    if (booksData.items.length > 0) {
                        setCards(booksData.items)
                        setLoading(false)
                        console.log(cards)
                    }
                }
            }
            )
        }
    }

    return (
        <div className="header-background-image d-flex justify-content-center align-items-center flex-column" >
            <div className="filter">
                <h1 className="display-4 text-center text-white mb-3" style={{zIndex: 2}}>
                    Find books enlightening your mind
                </h1>
                <div style={ { width: '100%' } }>
                    <InputGroup size='lg' className='mb-3'>
                        <FormControl
                            placeholder="Search Book"
                            value = {query}
                            onChange = { evnt => setQuery(evnt.target.value)}
                        />
                        <InputGroup.Append>
                            <Button variant="success" onClick={handleSubmit}>
                                <i className='fas fa-search'></i>
                            </Button>
                            <ToastContainer />
                        </InputGroup.Append>
                    </InputGroup>
                    <Form.Row>
                        <FormGroup as={Col} md={2} className="ml-5">
                            <FormLabel for="maxResults">Max Results</FormLabel>
                            <FormControl 
                                type="number" 
                                id="maxResults" 
                                placeholder="Max Result" 
                                value = {maxResults}
                                onChange = { e => setMaxResults(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup as={Col} md={2} className="ml-5">
                            <FormLabel for="startIndex">Start Index</FormLabel>
                            <FormControl 
                                type="number" 
                                id="StartIndex" 
                                placeholder="Start Index" 
                                value = {startIndex}
                                onChange = { e => setStartIndex(e.target.value)}
                            />
                        </FormGroup>
                    </Form.Row>
                </div>
            </div>
        </div>
    )
}

export default BookHeader;