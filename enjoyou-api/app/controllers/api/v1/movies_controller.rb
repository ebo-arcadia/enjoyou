class Api::V1::MoviesController < ApplicationController

    def index
        movies = Movie.all
        render json: movies, status: 200
    end 

    def create
        params[:movie][:movieData].each do |m|
            @movies = Movie.create(title: m[:Title], year: m[:Year], imdbID: m[:imdbID], poster: m[:Poster])
        end
        render json: @movies, status: 200
    end 

    def movie_params
        params.require(:movie).permit(:title, :year, :imdbID, :poster)
    end 
end
