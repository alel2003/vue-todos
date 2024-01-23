import Home from '@/views/Home'

export const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/todos",
    component: () => import("./views/Todos.vue"),
  },
];