import Sequelize from 'sequelize';
import config from '../../utils/config';
import UserModel from '../../models/user';
import TaskModel from '../../models/task';

const databaseConfiguration = config.database[process.env.NODE_ENV];

const sequelize = new Sequelize(
    databaseConfiguration.database,
    databaseConfiguration.username,
    databaseConfiguration.password,
    databaseConfiguration
);

const User = UserModel(sequelize, Sequelize)
const Task = TaskModel(sequelize, Sequelize)

Task.belongsTo(User);

sequelize.sync({force:false});

export {
    User,
    Task
}