<template>
    <div>
      <h1>Login</h1>
      <form @submit.prevent="login">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
    async login() {
        try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            username: this.username,
            password: this.password,
            }),
        });

        if (response.ok) {
            // 登录成功
            // 可以在这里处理登录成功后的操作，比如保存登录状态等
            console.log('登录成功');
        } else {
            // 登录失败
            console.error('登录失败');
        }
        } catch (error) {
        console.error('登录出错：', error);
        }
    }
    }
  };
  </script>