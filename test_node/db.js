const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'message'
});

connection.connect((err) => {
  if (err) {
    console.error('資料庫連接失敗:', err);
    return;
  }
  console.log('已連接到資料庫');
});

module.exports = connection;