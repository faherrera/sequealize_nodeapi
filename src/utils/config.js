import dotenv from 'dotenv';
dotenv.config();
export default {
    port: process.env.PORT || 3001,
    database:{
        development: {
            username: "root",
            password: null,
            database: "node_api_sequelize",
            host: "127.0.0.1",
            dialect: "mysql"
        },
        testing: {
            username: "root",
            password: null,
            database: "node_api_sequelize",
            host: "127.0.0.1",
            dialect: "mysql"
        },
        production: {
            username: "root",
            password: null,
            database: "node_api_sequelize",
            host: "127.0.0.1",
            dialect: "mysql"
        },
    },
};