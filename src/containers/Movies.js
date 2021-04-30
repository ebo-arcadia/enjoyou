import React, { Component } from 'react';
import MovieFooter from '../components/movie/movieFooter';
import SearchMovieForm from '../components/movie/searchMovieForm';
import MovieHeader from '../components/movie/movieHeader';
import '../style/movie.css'

class Movies extends Component {
    render() {
        return (
            <div>
                <MovieHeader />
                <SearchMovieForm />
                <MovieFooter />
            </div>
        )
    }
}

export default Movies