<template>
  <div>
    <h5>{{ blogs[$route.params.id].title }}</h5>
    <span>{{ blogs[$route.params.id].content }}</span>
    <p>{{ blogs[$route.params.id].date }} </p>
    <router-view></router-view> <!-- Author, Comment 컴포넌트 보여주는 자리-->
  </div>
</template>

<script>
export default {
    name: 'detailComponent',
    props : {
        blogs: Array,
    }
}
</script>

<style>

</style>