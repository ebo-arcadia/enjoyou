class Api::V1::MoviesController < ApplicationController

    def index
        @movies = Movie.all
        
        render json: @movies, status: 200
    end 

    def create
        @movie = Movie.create(movie_params)
        
        render json: @movie, status: 200
    end 

    private
    
    def movie_params
        params.require(:movie).permit(:title)
    end 

end 