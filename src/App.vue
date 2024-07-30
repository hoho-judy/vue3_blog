<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Judy's Blog</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
            <router-link class="nav-link active" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <!-- <a class="nav-link" href="#">Link</a> -->
            <router-link class="nav-link" to="/list">List</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  
  <!-- a태그와 유사한 역할을 수행 --> 
  <!-- <router-link to="/">Home</router-link> -->
  <!-- <router-link to="/list">글목록 보기</router-link> -->

  <!-- 라우터 - 페이지 나누는 방법(특정 url로 접속했을 때 특정 화면을 보여주고 싶을 때)--> 
  <router-view :blogs="blogs"></router-view>
  <!-- <List :blogs="blogs" /> -->

</template>
   
<script>
// import List from './components/List.vue';
import blogData from './assets/data.js';


export default {
  name: 'App',
  data() {
    return {
      blogs: blogData,
    }
  },
  components: {
    // List: List,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
