import React, { useState } from 'react';
import { Card, CardTitle, CardImg, CardBody, Button, Modal  } from 'react-bootstrap';

const BookCard = ( {thumbnail} ) => {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return <Card>
            <CardImg top style={ {width: '100%', height: '230px' }} src={ thumbnail } alt='book card image' />
        </Card>
};

export default BookCard;