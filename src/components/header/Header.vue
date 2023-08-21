<script setup>
defineProps({
  links: {
    type: Array,
    required: true,
    default: () => {
      return [];
    }
  }
})
</script>

<template>
  <div class="header__wrapper">
    <div class="header__inner">
      <nav>
        <template v-for="(link, linkIndex) in links" :key="linkIndex">
          <RouterLink :to="link.url"> {{ link.title }}</RouterLink>
        </template>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.header__wrapper {
  color: var(--color-text);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;

  height: 100px;
  background: var(--color-background-soft);

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header__inner {
  width: 100%;
  margin: 1rem;
}

nav a {
  margin: 1rem;
}


@media (min-width: 1024px) {
  .header__inner {
    margin: 2rem;
  }

  nav a {
    font-size: 18px;
    margin: 1rem;
  }
}


</style>