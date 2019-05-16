var express = require('express');
var bodyParser = require('body-parser');
var task_api_routes = require('./routes/taskApi');
var song_chose_api_routes = require('./routes/songChooseApi');
var spotify_song_api_routes = require('./routes/spotifySongApi');
var path = require('path');

// database configuration
var Sequelize = require('sequelize');

db_url = process.env.DATABASE_URL;

let sequelize;

// if the database url is present then the app is running at heroku so connect to postgres
if(db_url){
    sequelize = new Sequelize(db_url,{
        dialect: 'postgres',
    });
    // verify connection
    sequelize.authenticate()
        .then(()=> console.log('connected to Postgres'))
        .catch(err=> console.log(err))
}else {
// otherwise run locally and use sqlite
    sequelize = new Sequelize({
        dialect: 'sqlite',
        storage: './development.db'
    });
// verify connection
    sequelize.authenticate()
        .then(()=>console.log('connected to sqlite'))
        .catch(err=>console.log('error connecting',err));
}

// initialize task and song models
var task = require('./models/task.js')(sequelize,Sequelize);
var songChose = require('./models/songChose')(sequelize,Sequelize);
var spotifySongs = require('./models/spotifySongs')(sequelize,Sequelize);

// app configuration
var app = express();
app.use(bodyParser.json());

// Serve static files from /dist directory
app.use(express.static(path.join((__dirname, 'playlist-scheduler', 'dist'))));

// when x route is used call corresponding x
// javascript file that is the model
app.use('/api/task',task_api_routes(task));
app.use('/api/song-chose',song_chose_api_routes(songChose));
app.use('/api/spotify-song', spotify_song_api_routes(spotifySongs));

// Error handlers - for route no foun
app.use(function (req, res, next) {
    res.status(404).send('Not Found')
});

// Error handler for server errors
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Server error')
});

// star server funning
var server = app.listen(process.env.PORT || 3000, function () {
    console.log('app running on port', server.address().port)
})