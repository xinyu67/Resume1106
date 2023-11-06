<template>
    <div class="login-page">
        <h1>登入</h1>
        <form @submit.prevent="login">
            <div class="form-group">
                <label for="username">帳號</label>
                <input type="text" id="username" v-model="username" required>
            </div>
            <div class="form-group">
                <label for="password">密碼</label>
                <input type="password" id="password" v-model="password" required>
            </div>
            <button type="submit">登入</button>
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
        login() {
            if (this.username === 'your_username' && this.password === 'your_password') {
                alert('登入成功');
            } else {
                alert('登入失敗');
            }
        }
    }
};
</script>

<style>
.login-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
}

form {
    width: 300px;
    background: #fff;
    border-radius: 5px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.form-group {
    margin: 10px 0;
}

label {
    display: block;
    font-weight: bold;
}

input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

button {
    background: #007BFF;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background: #0056b3;
}
</style>
