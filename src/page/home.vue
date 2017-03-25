<template>
  <div class="home">
    <v-marquee :company="company"></v-marquee>
    <div class="main">
      <el-row class="top">
        <el-col class="newsImg-wrapper" :span="10">
          <el-card :body-style="{ padding: '0px'}">
            <img class="newsImg" :src="news.newsImg[newsKey]" alt="">
            <div></div>
          </el-card>
        </el-col>
        <el-col class="hotNews" :span="10">
          <el-card :body-style="{ padding: '0px'}">
            <div class="hotNews-card" v-for="(val, index) in news.hotNews" @mouseenter="imgSwitch(index)">
              <h1 class="hotNews-title">{{val.title}}</h1>
              <p class="hotNews-content">{{val.content}}</p>
            </div>
          </el-card>
        </el-col>
        <el-col class="asideNews" :span="4">
          <el-card :body-style="{ padding: '0px'}">
            <div class="aside">
              <span class="icon icon-product"></span>
              <span class="title">产品展示</span>
            </div>
            <div class="aside">
              <span class="icon icon-download"></span>
              <span class="title">相关下载</span>
            </div>
            <div class="aside">
              <span class="icon icon-policy"></span>
              <span class="title">政策资讯</span>
            </div>
            <div class="aside">
              <span class="icon icon-news"></span>
              <span class="title">最新新闻</span>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import marquee from 'components/marquee.vue'

//  let $ = require('jquery')

  export default {
    props: {},
    data () {
      return {
        company: {},
        news: {
          newsImg: []
        },
        newsKey: ''
      }
    },
    activated () {
      this.init()
    },
    methods: {
      init: function () {
        this.newsKey = 0
        this.getInfo()
      },
      getInfo: function () {
        this.$http.get('/api/company').then((response) => {
          this.company = response.data.data
        })
        this.$http.get('/api/news').then((response) => {
          this.news = response.data.data
        })
      },
      imgSwitch: function (index) {
        this.newsKey = index
      }
    },
    components: {
      'v-marquee': marquee
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss" scope>
  .main {
    width: 1200px;
    margin: auto;

    .top {
      .el-col:first-child {
        margin-left: -25px;
        padding-left: 25px;
      }
      .el-col:not(:last-child) {
        width: 485px;
      }
      .el-col:not(:first-child) {
        padding-left: 25px;
      }
      .el-col:last-child {
        width: 255px;
      }
      .newsImg-wrapper {
        overflow: hidden;

        .newsImg{
          cursor: pointer;
          padding-top: 20px;
          width: 100%;
        }
      }
      .el-card {
        height: 386px;
      }
      .hotNews {
        .hotNews-card{
          padding: 10px 10px 10px 20px;
        }
        .hotNews-card:hover{
          background-color: rgb(249, 240, 249);
        }
        .hotNews-title {
          cursor: pointer;
          font-size: 18px;
          font-weight: 200;
          color: #323232;
        }
        .hotNews-content {
          text-indent: 2em;
          line-height: 1.5;
          color: #909090;
        }
      }

      .asideNews{
        .aside{
          box-sizing: border-box;
          width: 100%;
          height:70px;
          line-height: 70px;
          text-align: center;
          border: 2px solid #f08216;
          font-size: 0;
          cursor: pointer;

          .icon{
            margin-left: -20px;
            padding-right: 24px;
            vertical-align: middle;
            font-size: 24px;
            color: #f39a0d;
          }

          .title{
            vertical-align: middle;
            font-size: 16px;
            letter-spacing: 2px;
            background: -webkit-linear-gradient(135deg, #ff7400, #ffdf00);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        }
        .aside:first-child{
          margin-top: 1px;
        }
        .aside:not(:last-child) {
          margin-bottom: 35px;
        }
      }
    }

  }
</style>
