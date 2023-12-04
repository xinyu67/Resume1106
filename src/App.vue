<template>
  <div id="app">
    <headerLogin @loginSuccess="handleLoginSuccess" />
    <HelloWorld v-if="loggedIn" />
    <MessageBoard v-if="loggedIn" />
  </div>
  <!--<headerLogin />
  <img class="rounded-image" alt="Vue logo" src="./assets/0288BE49-7868-4B64-A366-E9BB9EEF59DA.jpg">
  <HelloWorld msg="陳欣妤 Silvia"/>
  <div id="app">
    <MessageBoard />
  </div>-->
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MessageBoard from "./components/MessageBoard.vue";
import headerLogin from "./components/headerLogin.vue";

export default {
  name: 'App',
  components: {
    HelloWorld,
    MessageBoard,
    headerLogin
  },
  data() {
    return {
      loggedIn: false,
    };
  },
  methods: {
    handleLoginSuccess() {
      this.loggedIn = true;
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.rounded-image {
  width: 200px; 
  height: 200px; 
  border-radius: 50%; 
  margin-top: 30px;
}
</style>
