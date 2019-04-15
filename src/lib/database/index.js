import Sequelize from 'sequelize';
import path from 'path';
import fs from 'fs';
import config from './config';
 
let database = null;

if (!database) {
    
    const _sequelize = new Sequelize(
        config.development.database,
        config.development.username,
        config.development.password,
        config.development
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

    // Object.keys(database.models).forEach( key => {
    //     database.models[key].associate(database.models);
    // });

}

export default database;