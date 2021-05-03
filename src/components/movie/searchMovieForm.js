import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchMovie, loadAndFetchMovies } from '../../actions/MovieActions';

export class SearchMovieForm extends Component {

    handleOnChange = e => {
        this.props.searchMovie(e.target.value)
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.loadAndFetchMovies(this.props.text);
    }

    // create new movies in rails api with movies data from react fetch 
    // let response = await fetch('http://localhost:5000/notes', {  
    //     method: 'POST',  
    //     headers: {    
    //         Accept: 'application/json',    
    //         'Content-Type': 'application/json',  
    //     },  
    //     body: JSON.stringify({movies}),});

    render() {
        return (
                <div className="jumbotron jumbotron-fluid mt-5 text-center">
                    <div className="container">
                        <h1 className="display-4 mb-3">
                            <i className="fa fa-search" /> What do You feel like watching?
                        </h1>
                        <form id="searchForm" onSubmit={this.handleSubmit}>
                            <input
                                type="text"
                                className="form-control"
                                name="searchText"
                                placeholder="sci-fi ? drama ? action ?..."
                                onChange={this.handleOnChange}
                            />
                            <button type="submit" className="btn btn-primary btn-bg">
                                Search
                            </button>
                        </form>
                    </div>
                </div>
        )
    }
}

const mapStateToProps = state => ({
    text: state.movies.text
});

export default connect(mapStateToProps, {searchMovie, loadAndFetchMovies})(SearchMovieForm);

