/*const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// 使用路由模組
const authRoutes = require('./authRoutes.js');
const messageRoutes = require('./messageRoutes');

// 使用路由
app.use('/login', authRoutes);
app.use('/messages', messageRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});*/

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();

// 使用 CORS 中間件允許跨域請求
app.use(cors());
app.use(bodyParser.json());

// 建立 MySQL 連接
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'message'
});

// 連接到 MySQL 資料庫
connection.connect((err) => {
    if (err) {
      console.error('資料庫連接失敗:', err);
      return;
    }
    console.log('已連接到資料庫');
  });

// 模擬用戶數據（這僅是示例，請使用實際的用戶數據庫）
/*const users = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' },
];*/

// 登入路由
app.post('/login', (req, res) => {
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

//新增留言
app.post('/addMessage', (req, res) => {
    const { message } = req.body;

    connection.query(
        'INSERT INTO messages (content) VALUES (?)',
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

//歷史留言
app.get('/getMessages', (req, res) => {
    connection.query(
        'SELECT * FROM messages',
        (err, results) => {
            if (err) {
                console.error('獲取留言失敗:', err);
                res.status(500).json({ message: '伺服器錯誤' });
                return;
            }
            res.status(200).json({ messages: results });
        }
    );
});

// 刪除留言
app.delete('/deleteMessage/:id', (req, res) => {
    const id = req.params.id;

    // 使用 id 進行刪除操作，從資料庫或其他儲存留言的地方刪除對應的留言
    connection.query('DELETE FROM messages WHERE id = ?', [id], (err, results) => {
        if (err) {
            console.error('刪除留言失敗:', err);
            res.status(500).json({ message: '刪除留言失敗' });
            return;
        }
        
        // 完成刪除操作後，回應成功訊息
        res.status(200).json({ message: '留言刪除成功' });
    });
});

// 編輯留言
app.put('/editMessage/:id', (req, res) => {
    const id = req.params.id;
    const newContent = req.body.content;
  
    const sql = 'UPDATE messages SET content = ? WHERE id = ?';
    connection.query(sql, [newContent, id], (err, result) => {
      if (err) {
        console.error('編輯留言失敗:', err);
        res.status(500).json({ message: '伺服器錯誤' });
        return;
      }
      res.status(200).json({ message: '留言編輯成功' });
    });
  });

// 登入路由
/*app.post('/login', (req, res) => {
  const { username, password } = req.body;
  
  // 檢查用戶名和密碼是否匹配
  const user = users.find(u => u.username === username && u.password === password);
  
  if (user) {
    // 登入成功
    res.status(200).json({ message: '登入成功' });
  } else {
    // 登入失敗
    res.status(401).json({ message: '用戶名或密碼錯誤' });
  }
});*/

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});