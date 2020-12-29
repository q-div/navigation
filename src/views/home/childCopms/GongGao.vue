<template>
    <div class="fu">
        <ul>
            <li><a href="#">最新活动</a></li>
            <li><a href="#">项目周报</a></li>
            <li><a href="#">帮助中心</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "GongGao"
}
</script>
<style scoped>
    .fu {
        position: absolute;
        top: 68px;
        right: 205.37px;
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