import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("@/views/Home.vue"),
    },
    {
      path: "/about",
      name: "About",
      component: () => import("@/views/About.vue"),
    },
    {
      path: "/service",
      name: "Service",
      component: () => import("@/views/Service.vue"),
    },
    {
      path: "/projects",
      name: "Projects",
      component: () => import("@/views/Projects.vue"),
    },
    {
      path: "/contact",
      name: "Contact",
      component: () => import("@/views/Contact.vue"),
    },
    {
      path: "/test",
      name: "Test",
      component: () => import("@/views/test.vue"),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      if (to.hash) {
        return {
          el: to.hash,
          behavior: 'smooth',
        }
      } else {
        return { top: 0, behavior: 'smooth' }
      }
    }
  }
});

export default router;
