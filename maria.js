const maria = require('mysql');
const conn = maria.createConnection({
    host:'3.36.59.31',
    port:3306,
    user:'admin',
    password:'ewha2021',
    database:'sober'
});
module.exports = conn;
