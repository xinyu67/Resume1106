<template>
  <div class="header">
    <button @click="showLoginDialog" v-if="!isLoggedIn">登入</button>
    <span v-else>歡迎，{{ username }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoggedIn: false,
      username: ''
    };
  },
  methods: {
    showLoginDialog() {
      alert('還不能登入哦');
    }
  }
};
</script>

<style scoped>
.header {
  background-color: #5A5AAD;
  color: #fff;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

button {
  background-color: #D8D8EB;
  color: 	#000000;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

button:hover {
  background-color: #B8B8DC;
}
</style>
