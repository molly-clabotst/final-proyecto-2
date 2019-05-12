var express = require('express');
var bodyParser = require('body-parser');
var Sequelize = require('sequelize');
var api_routes = require('./routes/api');
var path = require('path');

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
        storage: './db.sqlite3'
    });
// verify connection
    sequelize.authenticate()
        .then(()=>console.log('connected to sqlite'))
        .catch(err=>console.log('error connecting',err));

}


// initialize task and song models
var task = require('./model/task.js')(sequelize,Sequelize);
var song = require('./model/song')(sequelize,Sequelize);

// app configuration
var app = express();
app.use(bodyParser.json());

// Serve static files from /dist directory
app.use(express.static(path.join((__dirname, 'playlist-scheduler', 'dist'))));

app.use('/api',api_routes(task));
app.use('/api',api_routes(song));

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