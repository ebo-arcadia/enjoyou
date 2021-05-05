import React, { Component } from 'react';

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
            <ul>
                <h1>Movies from your Rails API</h1>
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