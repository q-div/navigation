<template>
    <div class="fu">
        <ul>
            <li><a href="#">简体中文</a></li>
            <li><a href="#">English</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "ZhongWen"
}
</script>
<style scoped>
  .fu {
        position: absolute;
        top: 68px;
        right: 132.37px;
        border: 1px solid pink;
        border-radius: 5%;
        text-align: center;
    }
     .fu ul {
        width: 88px;
        padding: 2px 0;
    }

    .fu ul li {
        width: 88px;
        height: 30px;
        line-height: 30px;
        font-size: 14px;
    }

    .fu ul li:hover {
        background-color: rgba(230, 247, 255);
    }
    
</style>