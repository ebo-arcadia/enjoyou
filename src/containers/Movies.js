import React, { Component } from 'react';
import MovieFooter from '../components/movie/movieFooter';
import SearchMoive from '../components/movie/searchMovie';
import MovieHeader from '../components/movie/movieHeader';
import '../style/movie.css'

class Movies extends Component {
    render() {
        return (
            <div>
                <MovieHeader />
                <SearchMoive />
                <MovieFooter />
            </div>
        )
    }
}

export default Movies