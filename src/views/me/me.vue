<template>
  <c-layout>
    <c-header>
      <c-launch></c-launch>
    </c-header>
    <c-main class="user">
      <c-box-skin class="user__box" mh10 radius6>
        <div class="avatar">
          <img
            class="avatar__avatar"
            src="https://s5.mogucdn.com/mlcdn/c45406/200902_7ekllijh17kb8hccca8aa8774hfjl_400x400.jpg_160x160.v1cAC.70.webp"
            circle
            mb15
          />
          <span class="avatar__name">小小小</span>
        </div>
      </c-box-skin>
      <c-box-center class="exit" mh10 mt10 radius6 fz14>
          退出登录
      </c-box-center>
    </c-main>
    <c-footer>
      <c-foot-nav class="footer" :list="list" fz16 />
    </c-footer>
  </c-layout>
</template>
<script>
export default {
  setup() {
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
      },
      {
        path: "/me/me",
        text: "我",
        active: true,
      },
    ];
    return {
      list,
    };
  },
};
</script>
<style lang="scss" scoped>
@include b(user) {
  background: url(https://s10.mogucdn.com/mlcdn/c45406/190819_1j85g48lc84kk8deg00f66fk53dlc_750x229.png)
    no-repeat top;
  background-size: 100%;
  padding-top: 40px;
  position: relative;
  @include e(box) {
    height: 100px;
  }
}
@include b(avatar) {
  position: absolute;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
  width: 60px;
  top: 10px;
  text-align: center;
  @include e(avatar) {
    @include dimensions(60px, 60px);
    border: 3Px #FFF solid;
  }
  @include e(name) {
    @include dimensions(60px, 60px);
  }
}
@include b(exit) {
    background: #ff5777;
    height: 40px;
}
@include b(footer) {
  &::v-deep .c-foot-nav__text {
    height: 50px;
  }
}
</style>
