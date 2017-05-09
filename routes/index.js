
var moviesJSON = require('../movies.json');



/// /routes
//home page
exports.home = function(req, res){

    var movies = moviesJSON.movies;

    res.render('home', {
        title: "Star Wars Movies",
        movies: movies
    });
};

exports.movie_single = function(req, res){
    var episode_number = req.params.episode_number;
    res.send("This is the page for episode " + episode_number)
};

exports.notFound = function(req, res){
    res.send("Page not found");
};
