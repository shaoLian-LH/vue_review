<template>
  <div class="not-found">
    <div>
      <span>404</span>
      <router-link to="/">返回首页</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang='less'>
.not-found {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>