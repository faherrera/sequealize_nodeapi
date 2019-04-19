import expressLoader from './express';
import sequealizeLoader from './sequelize';

async function loaderModule(app){

    await expressLoader(app);
    await sequealizeLoader(app);

}

export default loaderModule;