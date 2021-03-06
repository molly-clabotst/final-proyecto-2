module.exports = (sequelize, DataTypes)=>{

    var Song = sequelize.define('SongChose', {
        name:{
            type: DataTypes.STRING,
            allowNull: false,
            model: 'task'
        },
        duration:{
            // TODO: check on this from spotify and xml
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        track_id:{
            // TODO: check this too
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            model: 'spotifySong'
        }
    });
    Song.sync({force:true}).then(()=>{
        console.log('synced table')
    })
}