<template>
    <div>
      <h1 class="message-board-title" style="color: #5A5AAD;">留言板</h1>
      <textarea v-model="message" class="message-input" rows="5" cols="30" :placeholder="isEditing ? '編輯留言' : '新增留言'"></textarea><br>
    <button @click="isEditing ? saveEditedMessage() : addMessage()" class="send-button">{{ isEditing ? '儲存' : '送出' }}</button>
    <button @click="isEditing ? saveEditedMessage() : addMessage()" class="send-button" v-if="loggedIn">{{ isEditing ? '儲存' : '送出' }}</button>
      <div class="message-history">
        <h2 class="history-header">歷史留言</h2>
        <ul class="history-list">
            <li v-for="(message, index) in messageHistory" :key="index" class="history-item">
                <div class="message-text">{{ message.content }}</div> 
                <div class="message-actions">
                    <button @click="editMessage(message.id, message.content)">編輯</button>
                    <button @click="deleteMessage(message.id)">刪除</button>
                </div>
            </li>
        </ul>
      </div>
    </div>
  </template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      message: "",
      messageHistory: [],
    };
  },
  mounted() {
    this.fetchMessages();
  },
  methods: {
    async fetchMessages() {
      try {
        const response = await axios.get('http://localhost:3000/getmessages');
        this.messageHistory = response.data.messages;
      } catch (error) {
        console.error('取得留言失敗:', error);
      }
    },
    async addMessage() {
      try {
        if (this.message.trim() !== "") {
          const response = await axios.post('http://localhost:3000/addMessage', {
            message: this.message
          });
          console.log(response.data.message);
          this.fetchMessages(); // 重新載入留言列表
          this.message = "";
        }
      } catch (error) {
        console.error('新增留言失敗:', error);
      }
    },
    async deleteMessage(id) {
        try {
            const response = await axios.delete(`http://localhost:3000/deleteMessage/${id}`);
            console.log(response.data.message);
            this.fetchMessages(); // 重新載入留言列表
        } catch (error) {
            console.error('刪除留言失敗:', error);
        }
    },
    async editMessage(messageId, content) {
      // 開始編輯留言
      this.isEditing = true;
      this.editedMessageId = messageId;
      this.message = content;
    },
    async saveEditedMessage() {
      // 儲存編輯後的留言
      const messageId = this.editedMessageId;
      if (messageId) {
        // 透過 API 更新留言內容
        try {
          const response = await axios.put(`http://localhost:3000/editMessage/${messageId}`, {
            content: this.message,
          });
          console.log(response.data.message);
          this.fetchMessages(); // 重新載入留言列表
          this.isEditing = false; // 關閉編輯模式
          this.editedMessageId = null;
          this.message = ''; // 清空輸入框
        } catch (error) {
          console.error('編輯留言失敗:', error);
        }
      }},
  },
};
</script>

<style>
.messages {
    margin-top: 20px;
}

.message {
    margin-bottom: 10px;
}

.message-history {
    margin-top: 20px;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 5px;
    background-color: #f9f9f9;
    width: 98%;
}

.history-header {
    font-size: 18px;
    color: #333;
    margin-bottom: 10px;
}

.history-list {
    list-style: none;
    padding: 0;
}

.history-item {
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
    font-size: 16px;
    color: #333;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s, transform 0.2s;
}

.history-item:hover {
    background-color: #f0f0f0;
    transform: scale(1.02);
}

.message-board-title {
    font-size: 24px;
    color: #333;
    text-align: center;
    margin-bottom: 20px;
}

.message-input {
    width: 85%;
    padding: 10px;
    font-size: 16px;
    border: 2px solid #ccc;
    border-radius: 5px;
    margin-bottom: 10px;
}

.send-button {
    background-color: #5A5AAD;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    width: 86.5%;
}

.send-button:hover {
    background-color: #0056b3;
}

.message-actions {
    display: flex;
    gap: 10px;
    justify-content: flex-end;
}

.history-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>