import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieCard from './movieCard';

export class MovieList extends Component {
    render() {
        const { movies } = this.props;
        let movieItems = movies.Response === 'True' ? movies.Search.map((movie, index) => <MovieCard key={index} movie={movie}/>) : "This movie does not exist. Try something else!";
        return (
            <div className="row">{movieItems}</div>
        )
    }
}

const mapStateToProps = state => ({
    movies: state.movies.movies
})

export default connect(mapStateToProps)(MovieList);
