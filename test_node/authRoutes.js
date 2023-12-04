const express = require('express');
const router = express.Router();
const db = require('./db');

router.post('/login', (req, res) => {
    const { username, password } = req.body;

    connection.query(
      'SELECT * FROM users WHERE username = ? AND password = ?',
      [username, password],
      (err, results) => {
        if (err) {
          res.status(500).json({ message: '伺服器錯誤' });
          console.error('資料庫查詢錯誤:', err);
          return;
        }
    
        if (results.length > 0) {
          res.status(200).json({ message: '登入成功' });
        } else {
          res.status(401).json({ message: '用戶名或密碼錯誤' });
        }
      }
    );
});

module.exports = router;