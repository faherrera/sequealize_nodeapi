

const User = (sequelize, DataType) => sequelize.define('user', {
    id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataType.INTEGER
    },
    firstname: {
        type: DataType.STRING,
    },
    lastname: {
        type: DataType.STRING,
    },
    username: {
        type: DataType.TEXT
    },
    about: {
        type: DataType.TEXT
    },
    email: {
        type: DataType.STRING,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataType.STRING,
    },
    last_login: {
        type: DataType.DATE
    },
    status: {
        type: DataType.ENUM('active', 'inactive'),
        defaultValue: 'active'
    }
});

export default User;