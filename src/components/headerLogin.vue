<template>
  <div class="login-container">
    <h2 v-if="!loggedIn">登入</h2>
    <h2 v-else>歡迎 {{ username }}</h2>
    <div class="login-container" v-if="!loggedIn">
      <form @submit.prevent="login">
        <div class="input-group">
          <label for="username">帳號:</label>
          <input type="text" id="username" v-model="username" required>
          <label for="password">密碼:</label>
          <input type="password" id="password" v-model="password" required>
          <button type="submit">登入</button>
        </div>
      </form>
    </div>
    <div v-if="isLoggedIn">
    </div>
    <div v-if="loggedIn">
      <!-- 登入成功時觸發logout事件 -->
      <button @click="onLogout">登出</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: '',
      loggedIn: false
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('http://localhost:3000/login', {
          username: this.username,
          password: this.password
        });
        alert(response.data.message); // 顯示後端回傳的訊息
        if (response.status === 200) {
          this.loggedIn = true;
          this.$emit('loginSuccess');
        }
        // 在這裡可以根據登入成功後的情況做相應的處理
        // 例如導航到其他頁面或設置登入狀態
      } catch (error) {
        alert('登入失敗');
        console.error(error);
      }
    },
    onLoginSuccess() {
      this.$emit('loginSuccess');
    },
    onLogout() {
      // 在這裡可以進行登出相關的邏輯
      // 例如發送登出請求，清除本地存儲的登入信息等
      this.loggedIn = false;
      // 登出時觸發logout事件
      this.$emit('logout');
    },
  }
};
</script>

<style scoped>
.login-container {
  background-color: #5A5AAD; 
  max-width: 100%;
  padding: 10px;
  border-radius: 5px;
}

h2{
  color: #ffffff;
}

form {
  display: flex;
  flex-direction: column;
}

.input-group {
  display: flex;
  align-items: center;
}

label {
  margin-right: 10px;
  min-width: 80px; 
  color: #ffffff;
}

input {
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
}

button {
  padding: 4px 16px;
  cursor: pointer;
}
</style>