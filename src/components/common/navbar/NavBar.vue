<template>
    <div class="nav-bar">
        <div class="left"><slot name="left"></slot></div>
        <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>
export default {
    name: "NavBar"
}
</script>

<style scoped>
  .nav-bar {
      width: 100%;
      display: flex;
      height: 64px;
      line-height: 64px;
  }

  .left {
      width: 250px;
      height: 64px;
      /* background-color: red; */
  }

  .right {
      flex: 1;
      /* background-color: pink; */
  }
</style>