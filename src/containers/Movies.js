import React, { Component } from 'react';
import MovieFooter from '../components/movie/movieFooter';
import searchMovieForm from '../components/movie/searchMovieForm';
import MovieHeader from '../components/movie/movieHeader';
import '../style/movie.css'

class Movies extends Component {
    render() {
        return (
            <div>
                <MovieHeader />
                <searchMovieForm />
                <MovieFooter />
            </div>
        )
    }
}

export default Movies