import React from 'react';
import { Card } from 'react-bootstrap';

const VideoList = ({title, description}) => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default VideoList;