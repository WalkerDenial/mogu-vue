import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/mall/home",
    name: "MallHome",
    component: () => import('../views/mall/home.vue'),
  },
  {
    path: "/mall/store",
    name: "MallShop",
    component: () => import('../views/mall/shop.vue'),
  },
  {
    path: "/promotion/fast-buy",
    name: "PromotionFastBuy",
    component: () => import('../views/promotion/fast-buy.vue'),
  },
  {
    path: "/promotion/sellout",
    name: "PromotionSellout",
    component: () => import('../views/promotion/sellout.vue'),
  },
  {
    path: "/promotion/mine",
    name: "PromotionMine",
    component: () => import('../views/promotion/mine.vue'),
  },
  {
    path: "/live/home",
    name: "LiveList",
    component: () => import('../views/live/list.vue'),
  },
  {
    path: "/live/detail",
    name: "LiveDetail",
    component: () => import('../views/live/detail.vue'),
  },
  {
    path: "/me/me",
    name: "Me",
    component: () => import('../views/me/me.vue'),
  },
  {
    path: "/animation/animation",
    name: "Animation",
    component: () => import('../views/animation/animation.vue'),
  },
  {
    path: "/animation/index",
    name: "AnimationIndex",
    component: () => import('../views/animation/index.vue'),
  },
  {
    path: "/fz/fz",
    name: "FZ",
    component: () => import('../views/fz/fz.vue'),
  },
  {
    path: "/",
    redirect: "/mall/home",
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
