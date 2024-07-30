<template>
  <div v-for="blog in blogs" :key="blog.number">
    <h5>{{ blog.title }}</h5>
    <p>{{ blog.date }}</p>
  </div>
</template>

<script>

export default {
  name: 'listComponent',
  props: {
    blogs: Array,
  },
}
</script>

<style>

</style>