var express = require('express');
var Sequelize = require('sequelize');

module.exports = function (Task) {

    var router = express.Router()
    // TODO: may have issue here with "tasks"
    router.get('/tasks', function (req, res, next) {
        // is the order ascending or descending, how to change?
        Task.findAll({order: ['start']}).then(tasks =>{
            return res.json(tasks)
        }).catch(err=>next(err))
    })

    router.post('/tasks', function (req, res, next) {
        Task.create(req.body).then((data)=>{
            return res.status(201).send('ok')
        }).catch(err=>{
            if (err instanceof Sequelize.ValidationError)   {
                let messages = err.errors.map((e)=> e.message)
                return res.status(500).json(messages)
            }
            return next(err)
        })
    })
    // Not sure exactly the best way to handle this, not sure exactly what it's doing'
    router.patch('/tasks/:id',function (req, res, next) {
        Task.update(
            req.body,{where: {id: req.params.id}}
        ).then((rowsModified)=>{
            return res.send('okay')
        })
    })
    return router
}