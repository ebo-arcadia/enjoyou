import React from 'react';
import "../book.css";
import { InputGroup, FormControl, FormGroup, FormLabel, Form, Col, Button } from 'react-bootstrap'
import { useState } from "react";

const BookHeader = () => {

    const [maxResults, setMaxResults] = useState(10)
    const [startIndex, setStartIndex] = useState(1)
    const [query, setQuery] = useState('')

    return (
        <div className="header-background-image d-flex justify-content-center align-items-center flex-column" >
            {/* {whatever} */}
            <div className="filter">
                <h1 className="display-4 text-center text-white mb-3" style={{zIndex: 2}}>
                    Find books enlightening your mind
                </h1>
                <div style={ { width: '100%' } }>
                    <InputGroup size='lg' className='mb-3'>
                    <FormControl
                        placeholder="Search Book"
                        aria-label="Search Book"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                        <Button variant="success"><i className='fas fa-search'></i></Button>
                    </InputGroup.Append>
                    </InputGroup>
                    <Form.Row>
                        <FormGroup as={Col} md={2} className="ml-5">
                            <FormLabel for="maxResults">Max Results</FormLabel>
                            <FormControl type="number" id="maxResults" placeholder="Max Result" />
                        </FormGroup>
                        <FormGroup as={Col} md={2} className="ml-5">
                            <FormLabel for="startIndex">Start Index</FormLabel>
                            <FormControl type="number" id="StartIndex" placeholder="Start Index" />
                        </FormGroup>
                    </Form.Row>
                </div>
            </div>
        </div>
    )
}

export default BookHeader;