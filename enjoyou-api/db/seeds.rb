# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Movie.create([
    { title: 'Star Wars', year: "1973", imdbID: "r12421tt", poster: "img.com/1" }, 
    { title: 'Lord of the Rings', year: "2000", imdbID: "r12sd2t", poster: "img.com/2" }, 
    { title: 'The Matrix', year: "1999", imdbID: "r2ddw2s2t", poster: "img.com/3" }, 
    ])