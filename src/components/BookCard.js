import React, { useState } from 'react';
import { Card, CardImg, Button, Modal  } from 'react-bootstrap';

const BookCard = ( {
        thumbnail,
        title,
        authors,              
        pageCount,
        publisher,
        language,
        description,
        previewLink,
        infoLink
    } ) => {
        const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
    return (
        <Card className="m-auto" style={{width: '233px'}}>
            <CardImg top style={ {width: '100%', height: '230px' }} src={ thumbnail } alt='book card image' />
            <Card.Body>
                <Card.Title className="card-title">{title}</Card.Title>
                <Button variant="outline-info" onClick={handleShow}>More Info</Button>
            </Card.Body>
            <Modal show={show} onHide={handleClose} centered size="lg">
                
                <Modal.Header closeButton>
                    <Modal.Title> {title} </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img src={thumbnail} alt={title} />
                    <p>Page Count: {pageCount} </p>
                    <p>language: {language} </p>
                    <p>Authors: {authors} </p>
                    <p>Publisher: {publisher} </p>
                </Modal.Body>
                
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="outline-success" target='_blank' href={previewLink}>
                        Preview Link
                    </Button>
                    <Button variant="outline-warning" target='_blank' href={infoLink}>
                        Info Link
                    </Button>
                </Modal.Footer>

            </Modal>
        </Card>
    )   
};

export default BookCard;