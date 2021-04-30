import React, { Component } from 'react';
import { connect } from 'react';
import MovieCard from './movieCard';

export class MovieList extends Component {
    render() {
        const { movies } = this.props;
        let movieItems = movies.Response === 'True' ? movies.Search.map((movie, index) => <MovieCard key={index} movie={movie}/>) : " ";
        return (
            <div>{movieItems}</div>
        )
    }
}

const mapStateToProps = state => ({
    movies: state.movies.movies
})

export default connect(mapStateToProps)(MovieList)
