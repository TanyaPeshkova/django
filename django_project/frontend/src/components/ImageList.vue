<template>
    <div class="image-list">
        <h2>Список всех изображений</h2>
        <ul>
            <li v-for="image in images" :key="image.id">
                <p>{{ image.description }}</p>
                <button @click="deleteImage(image.id)">Удалить</button>
            </li>
        </ul>
    </div>
</template>


<script>
import axios from 'axios';

export default {
    data() {
        return {
            images: [],
        };
    },
    methods: {
        async fetchImages() {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/images/');
                this.images = response.data;
            } catch (error) {
                console.error('Ошибка при получении списка изображений:', error);
            }
        },
        async deleteImage(id) {
            try {
                await axios.delete(`http://127.0.0.1:8000/api/images/${id}/`);
                this.fetchImages();
            } catch (error) {
                console.error('Ошибка при удалении изображения:', error );
            }
        },
    },
    created() {
        this.fetchImages();
    },
    watch: {
        '$route': 'fetchImages',
    },
};
</script>
