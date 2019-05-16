var express = require('express');
var Sequelize = require('sequelize');

// most validation should be on the server side to prevent tampering

module.exports = function (SpotifySong) {

    var router = express.Router()

    router.get('/', function (req, res, next) {
        // is the order ascending or descending, how to change?
        SpotifySong.findAll({order: ['id']}).then(spotifySongs =>{
            return res.json(spotifySongs)
        }).catch(err=>next(err))
    })

    router.post('/', function (req, res, next) {
        SpotifySong.create(req.body).then((data)=>{
            return res.status(201).send('ok')
        }).catch(err=>{
            if (err instanceof Sequelize.ValidationError)   {
                let messages = err.errors.map((e)=> e.message)
                return res.status(500).json(messages)
            }
            return next(err)
        })
    })

    // will pull up entry for song under the value track_name
    router.patch('/:track_name',function (req, res, next) {
        // find row to patch updates to
        SpotifySong.update(
            req.body,{
                where: {
                    track_name: req.params.track_name
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