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
    path: "/",
    redirect: "/mall/home",
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
