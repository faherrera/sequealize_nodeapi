import express from 'express';
import loaderModule from './loaders/index';


async function startServer() {
    const app = express();

    await loaderModule(app);

    app.listen(process.env.PORT || 3001, () => {
        console.log('Server on port', process.env.PORT || 3001);
    });

}

startServer();
