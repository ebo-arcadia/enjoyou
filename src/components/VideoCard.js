import React from 'react';
import { Card, CardImg, Button, Modal  } from 'react-bootstrap';

const VideoCard = ({video}) => {
    console.log(video)
    return (
        <Card>
            <Card.Title>{video.title}</Card.Title>
        </Card>
    )
}

export default VideoCard;