var express = require('express');

module.exports = function (Task) {

    var router = express.Router()
    // TODO: may have issue here with "tasks"
    router.get('/tasks', function (req, res, next) {
        Task.findAll().then(tasks =>{
            return res.json(tasks)
        })
    })

    router.post('/tasks', function (req, res, next) {
        Task.create(req.body).then((data)=>{
            return res.status(201).send('ok')
        })
    })

    // router.get("/*", function (req, res) {
    //     res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
    // })

    return router
}