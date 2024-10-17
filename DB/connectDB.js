import mysql from 'mysql2';
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ltwnangcao',
})
const connection = pool.promise();
export default connection