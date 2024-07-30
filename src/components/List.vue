<template>
  <div v-for="blog in blogs" :key="blog.number">
    <!-- router-link 태그에 파라미터를 붙여서 전달하려면 v-bind:to로 써야함 -->
    <!-- 축약 시 :to="`정해진url + ${변수명}`" -->
    <!-- <router-link v-bind:to="`/detail/${blog.number}`" :blogs="blogs"><h5>{{ blog.title }}</h5></router-link>  -->
    <!-- $router.push : 동적으로 변하는 이동 경로를 라우터에 추가 -->
    <h5 @click="$router.push(`/detail/${blog.number}`)">{{ blog.title }}</h5>
    <p>{{ blog.date }}</p>
  </div>
</template>

<script>

export default {
  name: 'listComponent',
  data() {
    return {
      
    }
  },
  props: {
    blogs: Array,
  },
}
</script>

<style>

</style>