<template>
  <c-layout>
    <c-main  class="container">
      <c-goods :list="promotionGoods"></c-goods>
    </c-main>
    <c-footer>
      <c-foot-nav class="footer" :list="footerList" fz13></c-foot-nav>
    </c-footer>
  </c-layout>
</template>
<script>
import { getPromotionGoods } from "@/api/promotion";
import { onMounted, reactive, toRefs } from "vue";
import CGoods from "./goods";

export default {
  components: {
    CGoods,
  },
  setup() {
    const data = reactive({
      promotionGoods: [],
    });

    onMounted(() => {
      getPromotionGoods('lastcrazy').then((res) => {
        data.promotionGoods = res.data;
      });
    });

    const footerList = [
      {
        path: "/promotion/fast-buy",
        text: "限时快抢",
      },
      {
        path: "/promotion/sellout",
        text: "即将售罄",
        active: true,
      },
      {
        path: "/promotion/mine",
        text: "我的快抢",
      },
    ];

    return {
      ...toRefs(data),
      footerList,
    };
  },
};
</script>
<style lang="scss" scoped>
@include b(container) {
  padding-bottom: 50px;
}
@include b(footer) {
  & ::v-deep .c-foot-nav__text {
    height: 50px;
  }
}
</style>
