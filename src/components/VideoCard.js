import React from 'react';
// import { Card, CardImg, Container, Row, Col } from 'react-bootstrap';
import '../style/video.css'

const VideoCard = ({video}) => {
    console.log(video)
    return (
        <>
            <div className="video-card" key={video.id}>
                <br></br>
                <div>
                    <h1><a href={video.link} target="_blank">{video.title}</a></h1>
                    <p>Description: {video.description}</p>
                </div>
                <ul className="meta">
                    <li>By: <a href={video.author.ref} target="_blank">{video.author.name}</a></li>
                    <li>Views: {video.views}</li>
                    <li>Duration: {video.duration}</li>
                    <li>Uploaded: {video.uploaded_at}</li>
                </ul>
                <img alt="" src={video.thumbnail} />
            </div>
        </>
    )
}

export default VideoCard;


{/* <Container>
    <Card className="video-card" key={video.id}>
        <Row>
            <Col md>
                <Card.Title>{video.title}</Card.Title>
                <CardImg href={video.thumbnail} alt="video-image" />
                <Card.Text>{video.description}</Card.Text>
            </Col>
            <Col md>
                <Card.Text>{video.author.ref}</Card.Text>
                <Card.Text>{video.author.name}</Card.Text>
                <Card.Text>{video.views}</Card.Text>
                <Card.Text>{video.duration}</Card.Text>
                <Card.Text>{video.uploaded_at}</Card.Text>
            </Col>
        </Row>
    </Card>
</Container> */}