<template>
    <div id="home">
        <nav-bar :class="{homeNav:isShow,yan:isShoww}">
            <div slot="right">
                <!-- <router-link to="/about" active-class="active">关于</router-link>
                <router-link to="/developer" active-class="active">开发</router-link>
                <router-view></router-view> -->
                <!-- <button @click="kaifaClick">开发者文档</button> -->
                <ul>
                    <li>
                      <router-link to="/home">首页</router-link>
                      <router-link to="/about">关于Lambda</router-link>
                      <router-link to="/developer">开发者文档</router-link>
                      <router-link to="/walletpages">钱包</router-link>
                      <router-link to="/ecology">Lambda Eco</router-link>
                      <router-link to="/technologies">技术探索</router-link>     
                      <router-link to="/technologies01">公告栏</router-link>
                      <router-link to="/technologies02">中文</router-link>
                    </li>
                </ul>
                <router-view></router-view>
            </div> 
        </nav-bar>
       
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
    name: "Home",
    components: {
        NavBar
    },
    data(){
      return {
        isShow: true,
        isShoww: false
      }
    },
    methods: {
    //     kaifaClick(){
    //         // 通过代码的方式修改理由  vue-router
    //         // push => pushState
    //         // this.$router.push('/developer')
    //         this.$router.replace('/developer')
    //         console.log('kaifaClick');
    //     }
    }
}
</script>

<style scoped>
  .homeNav {
      background-color: var(--color-tint);
      color: #fff;  
  }
  .yan {
      background-color: var(--color-background);
      color: #000;
  }
  
  .homeNav a:last-child::after{
    content:">";
  }
   

  .homeNav ul{
      position: relative;
      top: 0;
      left: 350px;
  }

  .homeNav ul li {
      float: left;
  }

  .homeNav a{
    padding: 20px;
    color: #fff;
    margin-left: 2px;
  }

  a:hover{
    border-bottom:3px solid rgba(24, 144, 255);
    padding-bottom: 21px;
  }

  .active {
      color: #000;
      border-bottom:3px solid rgba(24, 144, 255);
      padding-bottom: 20px;
  } 
  
  
</style>