import generalRoute from '../routes/general';
import apiRoute from '../routes/api/index';

const routesLoader = async (app) => {

    app.use('/', generalRoute);
    app.use('/api', apiRoute);

};

export default routesLoader;