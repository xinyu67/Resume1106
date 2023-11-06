<template>
  <img class="rounded-image" alt="Vue logo" src="./assets/0288BE49-7868-4B64-A366-E9BB9EEF59DA.jpg">
  <HelloWorld msg="陳欣妤 Silvia"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.rounded-image {
  width: 200px; /* 设置图像的宽度 */
  height: 200px; /* 设置图像的高度，使其成为正方形 */
  border-radius: 50%; /* 添加圆角 */
}
</style>
