import React, { Component } from 'react'
import MovieFooter from '../components/MovieFooter'
import MovieHeader from '../components/MovieHeader'

class Movies extends Component {
    render() {
        return (
            <div>
                <MovieHeader />
                <MovieFooter />
            </div>
        )
    }
}

export default Movies