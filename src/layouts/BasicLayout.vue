<template>
  <div class="basic-layout-wrapper">
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang='less'>
.basic-layout-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>