<script setup>
defineProps({
  blockType: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="container">
    <div class="block__title">{{ title }}</div>
    <div class="block__content">
      <div class="video__container" v-if="blockType == 'video'">
        <iframe class="test" src="https://www.youtube.com/embed/S6b_BspuoqA?si=OIiz9DhNjZRPQSBI"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
        />
      </div>
      <div class="photo__container" v-if="blockType == 'photo'">
        <div class="photo__item">
          <img class="photo" src="../assets/images/high_school.jpg">
        </div>
        <div class="photo__item">
          <img class="photo" src="../assets/images/after_high_school.jpg">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.video__container {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
}

.video__container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.photo__container {
  max-width: 100%;
  display: flex;
  gap: 32px;
  justify-content: space-between;
}

.photo__container img {
  width: 100%;
  height: 100%;
  max-width: 500px;
}
</style>