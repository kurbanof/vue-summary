import Main  from "@/pages/Main";
import PostPage  from "@/pages/PostPage";
import About  from "@/pages/About";
import PostPageID  from "@/pages/PostPageID";
import PostPageX  from "@/pages/PostPageX";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: '/',
    component: Main,
  },
  {
    path: '/posts',
    component: PostPage,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/posts/:id',
    component: PostPageID,
  },
  {
    path: '/postsX',
    component: PostPageX,
  },
  
]

const router = createRouter({
  routes,
  history: createWebHashHistory(process.env.BASE_UR)
  // параматры можно оставить пустыми
});

export default router;