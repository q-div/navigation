<template>
    <div class="nav-bar">
        <div class="left"><slot name="left"></slot></div>
        <div class="right">
            <slot name="right">
                
                <!-- <ul class="nav">
                    <li><a href="#">首页</a></li>
                    <li><a href="#">关于Lambda</a></li>
                    <li><a href="#">开发者文档</a></li>
                    <li><a href="#">钱包</a></li>
                    <li><a href="#">Lambda Eco</a></li>
                    <li><a href="#">技术探索</a></li>
                    <li><a href="#">公告栏</a></li>
                    <li><a href="#">中文</a></li>
                </ul> -->
            </slot>
        </div>
        
    </div>
</template>

<script>
export default {
    name: "NavBar",
    components: {
    }
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

  /* .nav {
      position: relative;
      right: 220px;
  }
  
  .nav li {
      float: right;
      height: 64px;
      line-height: 64px;
  }

  .nav li a{
      padding: 15px;
      color: #fff;
  } */
  
</style>