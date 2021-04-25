import React from 'react';
import { useState } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap'

const VideoSearch =() => {

    const [ SearchTerm, setSearchTerm ] = useState('')

    const handleSubmit = () => {
        console.log("whats up?")
    }

    const searchForm = () => {
        return (
            <div className="search-video-background-image" >
                <h1 className="display-4 text-center text-white mb-3">
                    What visual experience you want to have today?
                </h1>
                <div style={ { width: '30%', margin: 50 } }>
                    <InputGroup placement="right">
                        <FormControl
                            placeholder="Search Video"
                            value = {SearchTerm}
                            onChange = { e => setSearchTerm(e.target.value)}
                        />
                        <InputGroup.Append>
                            <Button variant="warning" onClick={handleSubmit}>
                                <i className='fas fa-search'></i>
                            </Button>
                        </InputGroup.Append>
                    </InputGroup>
                </div>
            </div>
        );
    }

    return (
        <div>
            {searchForm()}
        </div>
    )

}



export default VideoSearch;


