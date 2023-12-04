import { createRouter, createWebHistory } from 'vue-router';
//import UserLogin  from '../views/UserLogin.vue'; // 假設你有一個 Login 頁面的組件

const routes = [
    {
      //path: '/login',
      //name: 'Login',
      //component: UserLogin 
    },
    // 其他路由...
  ];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;