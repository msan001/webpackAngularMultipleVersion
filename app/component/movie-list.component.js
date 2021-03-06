
    "use strict";

function movieList(){
    return {
        template: require("ps-movies/movie-list.component.html"),
        controllerAs: "model",
        controller: ["$http", function ($http) {

        var model = this;
        model.movies = [];
        function fetchMovies($http) {
                return $http.get("./data/movies.json")
                            .then(function(response) {
                                return response.data;
                            });
            }
        model.$onInit = function() {
            fetchMovies($http).then(function(movies) {
                model.movies = movies;    
            });
        };
        
        model.upRating = function(movie) {
            if(movie.rating < 5) {
                movie.rating += 1;
            }
        };
        
        model.downRating = function(movie) {
            if(movie.rating > 1) {
                movie.rating -= 1;
            }
        };
    }]};}
module.exports = movieList();

