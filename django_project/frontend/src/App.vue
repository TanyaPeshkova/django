<template>
  <div id="app">
    <h1>Управление картинками</h1>
    <router-view @image-added="fetchImages"></router-view>
    <ImageList ref="imageList"></ImageList>
  </div>
</template>

<script>
import ImageList from '@/components/ImageList.vue';

export default {
  components: {
    ImageList,
  },
  methods: {
    fetchImages() {
      this.$refs.imageList.fetchImages();
    },
  },
};
</script>