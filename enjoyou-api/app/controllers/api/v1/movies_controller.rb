class Api::V1::MoviesController < ApplicationController

    def index
        movies = Movie.all
        render json: movies, status: 200
    end 

    def create
        movie = Movie.find(params[:id])
        render json: movie, status: 200
    end 

    private

    def movie_params
        params.require(:movie).permit(:title, :year, :imdbID, :poster)
    end 

end
