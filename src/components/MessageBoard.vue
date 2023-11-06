<template>
    <div>
        <h1 class="message-board-title" style="color: #5A5AAD;">留言板</h1>
        <textarea v-model="newMessage" class="message-input" rows="5" cols="30" placeholder="新增留言"></textarea><br>
        <button @click="addMessage" class="send-button">送出</button>

        <div class="message-history">
            <h2 class="history-header">歷史留言</h2>
            <ul class="history-list">
                <li v-for="(message, index) in messageHistory" :key="index" class="history-item">
                    <div class="message-text">{{ message }}</div>
                    <div class="message-actions">
                        <button @click="editMessage(index)">編輯</button>
                        <button @click="deleteMessage(index)">刪除</button>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                messages: [],
                newMessage: "",
                messageHistory: [],
                isEditing: false,
                editIndex: null,
            };
        },
    methods: {
        addMessage() {
            if (this.newMessage.trim() !== "") {
                this.messages.push(this.newMessage);
                this.messageHistory.push(this.newMessage);
                this.newMessage = "";
            }
        },
        editMessage(index) {
            this.isEditing = true;
            this.editIndex = index;
            this.newMessage = this.messageHistory[index];
        },
        deleteMessage(index) {
            this.messageHistory.splice(index, 1);
        },
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