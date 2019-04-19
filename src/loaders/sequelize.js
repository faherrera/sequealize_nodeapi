import database from '../lib/database/index';

export default async () => {

    await database._sequelize.sync(); //Init database.

}
