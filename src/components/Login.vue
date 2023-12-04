<template>
    <div>
      <h2>登入</h2>
      <form @submit.prevent="login">
        <label for="username">使用者名稱:</label>
        <input type="text" id="username" v-model="username" required>
        <label for="password">密碼:</label>
        <input type="password" id="password" v-model="password" required>
        <button type="submit">登入</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoginComponent', // 修改組件名稱為多個單詞
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      login() {
        // 在這裡可以加入登入驗證邏輯
        if (this.username === 'user' && this.password === 'password') {
          // 登入成功，導向App.vue介面
          this.$router.push('/app');
        } else {
          alert('登入失敗，請檢查使用者名稱和密碼');
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* 可以在這裡添加樣式 */
  </style>