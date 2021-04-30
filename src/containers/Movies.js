import React, { Component } from 'react';
import MovieFooter from '../components/movie/movieFooter';
import SearchMovieForm from '../components/movie/searchMovieForm';
import MovieHeader from '../components/movie/movieHeader';
import '../style/movie.css';
import LoadingSpinner from '../components/movie/loadingSpinner';
import MovieList from '../components/movie/movieList';
import { connect } from 'react-redux';

class Movies extends Component {
    render() {
        const { loading } = this.props
        return (
            <div>
                <MovieHeader />
                <SearchMovieForm />
                {loading ? <LoadingSpinner /> : <MovieList />}
                <MovieFooter />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loading: state.movies.loading
})

export default connect(mapStateToProps)(Movies);