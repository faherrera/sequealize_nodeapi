import Sequelize from 'sequelize';
import path from 'path';
import fs from 'fs';
import config from '../../utils/config';

let database = null;

const databaseConfiguration = config.database[process.env.NODE_ENV];

if (!database) {
    const _sequelize = new Sequelize(
        databaseConfiguration.database,
        databaseConfiguration.username,
        databaseConfiguration.password,
        databaseConfiguration
    );

    database = {
        _sequelize,
        Sequelize,
        models:{}
    };

    const dirName = path.join(__dirname, '..', '..','models');

    fs.readdirSync(dirName).forEach(
        filename => {
            const modelDir = path.join(dirName,filename);
            const model = _sequelize.import(modelDir);
            database.models[model.name] = model;
        });

    Object.keys(database.models).forEach( key => {
        database.models[key].associate(database.models);
    });

}

export default database;