module.exports = (sequelize, DataTypes)=>{

    var Task = sequelize.define('Task', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }, start: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }, end: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }, song: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
// TODO: validation method
    Task.sync({force:false}).then(()=>{
        console.log('synced table')
    });
    return Task
}