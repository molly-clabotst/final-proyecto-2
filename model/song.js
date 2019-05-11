// Did not restart nodemon
module.exports = (sequelize, DataTypes)=>{

    var Song = sequelize.define('Song', {
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        duration:{
            // TODO: check on this from spotify and xml
            type: DataTypes.NUMBER_TYPE,
            allowNull: false,
        },
        id:{
            // TODO: check this too
            type: DataTypes.NUMBER_TYPE,
            allowNull: false,
            unique: true
        }
    });
    Song.sync({force:true}).then(()=>{
        console.log('synced table')
    })
}