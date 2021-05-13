import React, { Component, Fragment } from 'react';
import { Table, Button, Card } from 'react-bootstrap';

class RailsAPI extends Component {
    state = {
        movies: []
    };

    // fetch movies from rails api get actions
    componentDidMount() {
        fetch('http://localhost:3000/api/v1/movies')
        .then(resp => resp.json())
        .then(movieData => {
            this.setState({movies: movieData})
        })
        .catch(error => alert(error.message));
    }

    renderAllMovies = () => {
        return(
            <Fragment>
                <h1>Movies from your library</h1>
                {this.state.movies.map(movie => (
                    <Card border="primary" style={{ width: '18rem' }}>
                        <Card.Header>{movie.title}</Card.Header>
                        <Card.Body>
                        <Card.Title>Year: {movie.year}</Card.Title>
                        <Card.Text>
                            <Button className="secondary" href={'https://www.imdb.com/title/' + movie.imdbID} target="_blank" rel="noreferrer">Movie Details</Button>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                ))};
            </Fragment>
        )
    }

    render() {
        return (
            <div>{this.renderAllMovies()}</div>
        )
    }

}

export default RailsAPI;