import React, { Component } from 'react';
import BooksList from '../components/BooksList';

class Books extends Component {

    render() {
        return (
            <div>
                <p>Thi is the Books container. using map state / dispatch to props redux to pass data in global state to children components</p>
                <BooksList />
            </div>
            
        )
    }
}

export default Books;