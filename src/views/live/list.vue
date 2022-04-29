<template>
  <c-layout>
    <c-header fixed>
      <c-launch></c-launch>
    </c-header>
    <c-main> </c-main>
    <c-footer>
      <c-foot-nav class="footer" :list="list" fz16> </c-foot-nav>
    </c-footer>
  </c-layout>
</template>
<script>
import { getLives } from "@/api/live";
import { onMounted, reactive, toRefs } from "vue";
export default {
  setup() {
    const data = reactive({
      liveList: [],
    });

    onMounted(() => {
      getLives().then((res) => {
        data.liveList = res.data;
      });
    });

    const list = [
      {
        path: "/mall/home",
        text: "首页",
      },
      {
        path: "/mall/store",
        text: "商城",
      },
      {
        path: "/live/home",
        text: "直播",
        active: true,
      },
      {
        path: "/me/me",
        text: "我",
      },
    ];
    return {
      ...toRefs(data),
      list,
    };
  },
};
</script>
<style lang="scss" scoped>
@include b(footer) {
  & ::v-deep .c-foot-nav__text {
    height: 50px;
  }
}
</style>
