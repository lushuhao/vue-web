<template>
  <div class="menu">
    <div class="menu-wrapper">
      <el-menu class="menu-ul" :default="active" mode="horizontal" @select="handleSelect">
        <el-menu-item class="home" index="1">首页</el-menu-item>
      <el-submenu index="2">
        <template slot="title">交易动态</template>
        <el-menu-item index="2-1">大圆普洱</el-menu-item>
        <el-menu-item index="2-2">九州商经</el-menu-item>
        <el-menu-item index="2-3">纬德白酒</el-menu-item>
        <el-menu-item index="2-4">湘商收藏品</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">资讯动态</template>
        <el-menu-item index="3-1">最新政策</el-menu-item>
        <el-menu-item index="3-2">近期新闻</el-menu-item>
        <el-menu-item index="3-3">新品发布</el-menu-item>
      </el-submenu>
      <el-menu-item index="4">软件下载</el-menu-item>
      <el-submenu index="5">
        <template slot="title">产品档案</template>
        <el-menu-item index="5-1">白酒</el-menu-item>
        <el-menu-item index="5-2">红酒</el-menu-item>
        <el-menu-item index="5-3">茶叶</el-menu-item>
      </el-submenu>
      <el-menu-item index="6">联系我们</el-menu-item>
      <el-submenu index="7">
        <template slot="title">关于我们</template>
        <el-menu-item index="7-1">公司介绍</el-menu-item>
        <el-menu-item index="7-2">产品介绍</el-menu-item>
      </el-submenu>
    </el-menu>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      company: {
        type: Object
      }
    },
    data() {
      return {
        active: '1',
        bourse: ''
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath)
      }
    },
    created() {
    },
    mounted() {
    },
    components: {}
  };
</script>

<style lang="scss" rel="stylesheet/scss" scope>
  .menu{


    .menu-wrapper{
      width:1200px;
      margin:auto;

      .home{
        width: 100px;
      }
      .el-menu{
        background-color: #e5e5e5;
      }

      .menu-ul > *:not(:last-child){
        margin-right: 72px;
      }

      .el-menu-item{
        text-align: center;
      }

      .el-menu--horizontal .el-submenu>.el-menu{
        opacity: .9;
      }
    }
  }
</style>
