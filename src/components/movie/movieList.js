import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieCard from './movieCard';

export class MovieList extends Component {
    render() {
        const { movies } = this.props;
        let movieData = movies.Search
        console.log(movieData)

        // persist returned movie search into rails using active record create (post) action with fetch 

        // method 1
        // async function postMovies(url = '', data = {}) {
        //     let response = await fetch(url, {  
        //         method: 'POST',  
        //         headers: {    
        //             'Accept': 'application/json',    
        //             'Content-Type': 'application/json',  
        //         },  
        //         body: JSON.stringify({movie: data})
        //     });
        //     return response.json();
        // }
    
        // postMovies('http://localhost:3000/api/v1/movies', {movieData})
        // .then(data => {console.log(data)
        // });

        // method 2
        fetch('http://localhost:3000/api/v1/movies', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                movie: { movieData }
            })
        }).then(response => response.json())
        .then(data => { console.log('Success:', data) })
        .catch((error) => { console.error('Error:', error)});
    
        let movieItems = '';
        
        movieItems = movies.Response === 'True' ? movies.Search.map((movie, index) => <MovieCard key={index} movie={movie}/>) : movies.Error;
        return (
            <div className="row">{movieItems}</div>
        )
    }
}

const mapStateToProps = state => ({
    movies: state.movies.movies
})

export default connect(mapStateToProps)(MovieList);
