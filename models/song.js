// Did not restart nodemon
module.exports = (sequelize, DataTypes)=>{

    var Song = sequelize.define('Song', {
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        duration:{
            // TODO: check on this from spotify and xml
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        track_id:{
            // TODO: check this too
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    });-
    Song.sync({force:true}).then(()=>{
        console.log('synced table')
    })
}