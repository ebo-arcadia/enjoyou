import React from 'react';
import "../book.css";
import { InputGroup, FormControl } from 'react-bootstrap'

const BookHeader = () => {
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
                        placeholder="Recipient's username"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                        <InputGroup.Text id="basic-addon2">Search</InputGroup.Text>
                    </InputGroup.Append>
                    </InputGroup>
                </div>
            </div>
        </div>
    )
}

export default BookHeader;