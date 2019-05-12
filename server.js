var express = require('express');
var bodyParser = require('body-parser');
var Sequelize = require('sequelize');
var api_routes = require('./routes/api');
var path = require('path')

// database configuration
sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db.sqlite3'
});

// verify connection
sequelize.authenticate()
    .then(()=>console.log('connected to sqlite'))
    .catch(err=>console.log('error connecting',err));

// initialize student model
var task = require('./model/task.js')(sequelize,Sequelize)

// app configuration
var app = express();
app.use(bodyParser.json());

// Serve static files from /dist directory
app.use(express.static(path.join((__dirname, 'playlist-scheduler','dist'))));

app.use('/api',api_routes(task));

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