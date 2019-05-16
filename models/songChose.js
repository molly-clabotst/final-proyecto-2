module.exports = (sequelize, DataTypes)=>{

    var Song = sequelize.define('SongChose', {
        name:{
            type: DataTypes.STRING,
            allowNull: false
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
            foreignKey:
        }
    });
    Song.sync({force:true}).then(()=>{
        console.log('synced table')
    })
}