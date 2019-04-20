import expressLoader from './express';
import routesLoader from './routes';

async function loaderModule(app){

    await expressLoader(app);
    await routesLoader(app);

}

export default loaderModule;