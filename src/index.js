require('dotenv').config();
import express from 'express';
import bodyParser from 'body-parser';
import database from './lib/database/index';


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req,res) => {
    res.send('Bienvenido a sequelize');
});


//Database;
database._sequelize.sync().done(() => {
    app.listen(process.env.PORT || 3001, () => {
        console.log('Server on port', process.env.PORT || 3001);
    });
});


export default app;