const express = require('express');
const router = express.Router();
const db = require('./db');

// 新增留言的路由
router.post('/addMessage', (req, res) => {
    const { message } = req.body;
  
    db.query(
      'INSERT INTO messages (message) VALUES (?)',
      [message],
      (err, results) => {
        if (err) {
          console.error('新增留言失敗:', err);
          res.status(500).json({ message: '伺服器錯誤' });
          return;
        }
        res.status(200).json({ message: '成功新增留言' });
      }
    );
  });

// 取得所有留言的路由
/*router.get('/', (req, res) => {
    db.query('SELECT * FROM messages', (err, results) => {
      if (err) {
        console.error('取得留言失敗:', err);
        res.status(500).json({ message: '伺服器錯誤' });
        return;
      }
      res.status(200).json(results);
    });
  });*/

module.exports = router;