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
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <Card className="m-auto" style={{width: '233px'}}>
            <CardImg top style={ {width: '100%', height: '230px' }} src={ thumbnail } alt='book card image' />
            <Card.Body>
                <Card.Title className="card-title">{title}</Card.Title>
                <Button onclick={toggle}>More Info</Button>
            </Card.Body>
            <Modal>

            </Modal>
        </Card>
    )   
};

export default BookCard;