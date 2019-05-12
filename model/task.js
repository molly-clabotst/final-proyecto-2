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
//     if the task that is being added starts after all tasks
//     currently in db, make sure that it's start time is also
//     after the closest tasks end time.
//     Do the opposite if it starts before all other tickets
    Task.sync({force:false}).then(()=>{
        console.log('synced table')
    });
    return Task
}