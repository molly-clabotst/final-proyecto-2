var express = require('express');
var Sequelize = require('sequelize');

module.exports = function (SongChose) {

    var router = express.Router()

    router.get('/', function (req, res, next) {
        // is the order ascending or descending, how to change?
        SongChose.findAll({order: ['id']}).then(songsChosen=>{
            return res.json(songsChosen)
        }).catch(err=>next(err))
    })

    router.post('/', function (req, res, next) {
        SongChose.create(req.body).then((data)=>{
            return res.status(201).send('ok')
        }).catch(err=>{
            if (err instanceof Sequelize.ValidationError)   {
                let messages = err.errors.map((e)=> e.message)
                return res.status(500).json(messages)
            }
            return next(err)
        })
    })

    router.patch('/:id',function (req, res, next) {
        // find row to patch updates to
        SongChose.update(
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