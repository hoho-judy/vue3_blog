import { createWebHistory, createRouter } from "vue-router";
import List from './components/List.vue';
import Home from './components/Home.vue';
import Detail from './components/Detail.vue';
import Author from './components/Author.vue';
import Comment from './components/Comment.vue';


const routes = [
  // 위에 쓸수록 우선권을 가짐
  {
    path: "/",
    component: Home,
  },
  {
    path: "/list",
    component: List,
  },
  {
    path: "/detail/:id", // 파라미터 넘기는 방법, 정규식도 가능함 ex) :id(\\d+) -> 숫자로 제한하는 정규식
    component: Detail,
    children: [ // nested route : 다른 url로 서브 페이지를 쪼갤 때
      {
        path: "author", // 상대경로로 써야함
        component: Author,
      },
      {
        path: "comment",
        component: Comment,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 