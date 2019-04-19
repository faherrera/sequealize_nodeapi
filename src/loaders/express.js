import bodyParser from 'body-parser';

const expressLoader = async ( app ) => {
    
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    app.get('/', (req, res) => {
        res.send('Bienvenido a sequelize');
    });

    return app;
};

export default expressLoader;