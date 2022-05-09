<template>
  <div class="container">
    <div class="container__fz1">文字大小测试(1px)</div>
    <div class="container__fz2">文字大小测试(2px)</div>
    <div class="container__fz3">文字大小测试(3px)</div>
    <div class="container__fz4">文字大小测试(4px)</div>
    <div class="container__fz5">文字大小测试(5px)</div>
    <div class="container__fz6">文字大小测试(6px)</div>
    <div class="container__fz7">文字大小测试(7px)</div>
    <div class="container__fz8">文字大小测试(8px)</div>
    <div class="container__fz9">文字大小测试(9px)</div>
    <div class="container__fz10">文字大小测试(10px)</div>
    <div class="container__fz11">文字大小测试(11px)</div>
    <div class="container__fz12">文字大小测试(12px)</div>
    <div class="container__fz13">文字大小测试(13px)</div>
    <div class="container__fz14">文字大小测试(14px)</div>
    <div class="container__fz15">文字大小测试(15px)</div>
    <div class="container__fz16">文字大小测试(16px)</div>
    <div class="container__fz17">文字大小测试(17px)</div>
    <div class="container__fz18">文字大小测试(18px)</div>
    <div class="container__fz19">文字大小测试(19px)</div>
    <div class="container__fz20">文字大小测试(20px)</div>
    <div class="container__fz21">文字大小测试(21px)</div>
    <div class="container__fz22">文字大小测试(22px)</div>
    <div class="container__fz23">文字大小测试(23px)</div>
    <div class="container__fz24">文字大小测试(24px)</div>
    <div class="container__fz25">文字大小测试(25px)</div>
    <div class="container__fz26">文字大小测试(26px)</div>
    <div class="container__fz27">文字大小测试(27px)</div>
    <div class="container__fz28">文字大小测试(28px)</div>
    <div class="container__fz29">文字大小测试(29px)</div>
    <div class="container__fz30">文字大小测试(30px)</div>
    <div class="container__fz31">文字大小测试(31px)</div>
    <div class="container__fz32">文字大小测试(32px)</div>
  </div>
</template>
<style lang="scss" scoped>
@include b(container) {
  color: black;
  @for $i from 1 through 32 {
    @include e(fz#{$i}) {
      font-size: #{$i}Px;
    }
  }
}
</style>
