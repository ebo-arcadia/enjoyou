import React from 'react';
import { useState } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap'
import '../style/video.css'

const VideoSearch =() => {

    const [ SearchTerm, setSearchTerm ] = useState('')

    async function handleSubmit() {
        console.log(SearchTerm)
        const response = await fetch(`https://youtube-search-results.p.rapidapi.com/youtube-search/?q=${SearchTerm}`, {
            "method": "GET",
            "headers": {
            "x-rapidapi-host": "youtube-search-results.p.rapidapi.com",
            "x-rapidapi-key": "931bd8e87fmsh0fd2ab219e7212ap1806bejsn8dd9a7988687"
            }
        });
        const body = await response.json();
        console.log(body);
        return body.items.filter(item => item.type === 'video');
    }

    const searchForm = () => {
        return (
            <div className="search-form-main" >
                <h1 className="display-4 text-center text-white mb-3">
                    What visual experience you want to have today?
                </h1>
                <div className="video-search-bar">
                    <InputGroup placement="right">
                        <FormControl
                            placeholder="Search Video"
                            value = {SearchTerm}
                            onChange = { e => setSearchTerm(e.target.value)}
                        />
                        <InputGroup.Append>
                            <Button variant="warning" onClick={ () => handleSubmit()}>
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


