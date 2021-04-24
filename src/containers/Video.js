import React, { useState } from 'react';
import { Form, Row, Col, Button, FormControl } from 'react-bootstrap';
import VideoList from '../components/VideoList'

function Video() {

    const [book, setBook] = useState("");
    const [result, setResult] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(book)
        fetch(`https://api.giphy.com/v1/gifs/search?q=${book}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(response => response.json())
        .then(data => {setResult(data.data)})
        setBook("")
    }

    return (
        <div>
            <Form.Text>Find books enlightening your mind</Form.Text>
            <Form inline onSubmit={handleSubmit}>
                <Row>
                    <Col xs={8}>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" value={book} onChange={event => setBook(event.target.value)} />
                    </Col>
                    <Col>
                    <Button variant="outline-success" type="submit">Search</Button>
                    </Col>
                </Row>

            </Form>
            <VideoList result={result}/>
        </div>
    )
}

export default Video;