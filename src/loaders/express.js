import bodyParser from 'body-parser';
const expressLoader = async ( app ) => {
    
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    return app;
};

export default expressLoader;