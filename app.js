var express = require('express');
var app = express();

app.set('view engine', 'ejs');

var routes = require('./routes');

var path = require('path');
//static assets in public directory
app.use(express.static(path.join(__dirname, 'public')));

//routes
//home page
app.get('/', routes.home);

app.get('star_wars_episode/:episode_number?', routes.movie_single);

app.get('*', routes.notFound);



app.listen(3000, function () {
    console.log('Example app listening on port 3000')
})