var mysql = require('mysql2/promise');

const mysqlConfig = {
    host: 'localhost',
    user: 'root',
    password: 'Sid_080615',
    database: 'video_app'
}

module.exports = {
    createConnection: ()=> {
        return mysql.createConnection(mysqlConfig);
    }
}