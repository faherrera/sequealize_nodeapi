const Task = (sequelize, DataType) => sequelize.define('task', {
    id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataType.INTEGER
    },
    title: {
        type: DataType.STRING
    },
});

export default Task;