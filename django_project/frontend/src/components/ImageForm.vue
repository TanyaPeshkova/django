<template>
    <div>
        <h2>Добавить изображение</h2>
        <form @submit.prevent="submitForm">
            <div>
                <label for="image_base64">Изображение (base64):</label>
                <textarea id="image_base64" v-model="image_base64" required></textarea>
            </div>
            <div>
                <label for="description">Описание:</label>
                <textarea type="text" id="description" v-model="description" required></textarea>
            </div>
            <button type="submit">Отправить</button>
        </form>
    </div>
</template>


<script>
import axios from 'axios';

export default {
    data() {
        return {
            image_base64: '',
            description: '',
        };
    },
    methods: {
        async submitForm() {
            const imageData = {
                image_base64: this.image_base64,
                description: this.description,
            };

            try {
                await axios.post('http://127.0.0.1:8000/api/images/', imageData);
                this.image_base64 = '';
                this.description = '';
                this.$emit('image-added');
            } catch (error) {
                console.error('Ошибка при отправке изображения:', error);
            }
        },
    },
};
</script>
