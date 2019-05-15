var express = require('express');
var Sequelize = require('sequelize');

module.exports = function (Task) {

    var router = express.Router()

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

    router.patch('/tasks/:id',function (req, res, next) {
        // find row to patch updates to
        Task.update(
            req.body,{
                where: {
                    id: req.params.id
                }}
        // if the row is not found and not modified then send an error message to...?
        ).then((rowsModified)=>{
            if(!rowsModified[0]){
                return res.status(404).send('Not found')
            }else {
                return res.send('okay')
            }
        }).catch(err =>{
            if (err instanceof Sequelize.ValidationError){
                let messages = err.errors.map((e)=> e.message)
                return res.status(500).json(messages)
            }
            return next(err)
        })
    })
    return router
}