<template>
  <div class="header">
    <el-row>
      <el-col class="logo-wrapper" :span="6">
        <img :src="company.logoImg" alt="" class="logoImg">
        <span class="name">{{company.name}}</span>
      </el-col>
      <el-col :span="5" :offset="9">
        <i class="icon icon-phone"></i>
        <span class="phone">客服热线: {{company.phone}}</span>
      </el-col>
      <el-col :span="4">
        <el-input placeholder="请输入关键词" icon="search" v-model="searchInput" :on-icon-click="handleIconClick"></el-input>
      </el-col>
    </el-row>
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
        searchInput: ''
      }
    },
    methods: {
      handleIconClick(ev) {
        console.log(ev)
      }
    },
    created() {
    },
    activated() {
    },
    components: {}
  };
</script>

<style lang="scss" rel="stylesheet/scss" scope>
  .header {
    width: 1200px;
    height: 100px;
    line-height: 100px;
    box-sizing: border-box;
    margin: auto;
    .logo-wrapper{
      cursor: pointer;
    }
    .el-col {
      height: 100px;

      .logoImg {
        width: 96px;
        height: 74px;
        vertical-align: middle;
      }
      .name {
        vertical-align: middle;
        font-size: 24px;
        font-weight: 500;
        background: -webkit-linear-gradient(left, #c2272d , #ff9a0d);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      .icon-phone {
        font-size: 32px;
      }
      .phone{
        font-size: 18px;
      }

      .icon-phone, .phone{
        color: #f39a0d;
        vertical-align: middle;
      }

      .el-input{
        width:200px;
        height:38px;
        vertical-align: middle;

        .el-input__inner::placeholder{
          color: #cbcbcb;
        }
      }
    }
  }
</style>
