import React, { Component } from 'react';

class RailsAPI extends Component {
    state = {
        movies: []
    };

    componentDidMount() {
        fetch('http://localhost:3001/api/v1/movies')
        .then(resp => resp.json())
        .then(movieData => {
            this.setState({movies: movieData})
        });
    };

    renderAllMovies = () => {
        return(
            <ul>
                {this.state.movies.map(movie => (
                    <li key={movie.imdbID}>{movie.title}</li>
                ))}
            </ul>
        )
    }

    render() {
        return (
            <div>{this.renderAllMovies()}</div>
        )
    }

}

export default RailsAPI;