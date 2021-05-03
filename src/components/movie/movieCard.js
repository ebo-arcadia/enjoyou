import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export class movieCard extends Component {
    render() {
        const { movie } = this.props;
        return (
            <div className="col-md-3 mb-5">
                <div className="card card-body bg-dark text-center h-100">
                    <img className="w-100 mb-2" src={movie.Poster} alt="Movie Cover" />
                    <h5 className="text-light card-title">
                        {movie.Title} - {movie.Year}
                    </h5>
                    <Button 
                        className="btn btn-primary" 
                        href={'https://www.imdb.com/title/' + movie.imdbID} 
                        target="_blank"
                        rel="noreferrer"
                        >
                        Movie Details
                        <i className="fas fa-chevron-right" />
                    </Button>
                </div>
            </div>
        )
    }
}

export default movieCard
