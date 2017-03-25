<template>
  <div class="slider">
    <el-carousel :intetval="4000" height="300px">
      <el-carousel-item v-for="(val, key) in company.hotImg" :key="key">
        <img :src="val" alt="" width="100%" height="100%">
      </el-carousel-item>
    </el-carousel>
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
        hotImgUrl: ['/static/img/slider-1.png', '/static/img/slider-2.png', '/static/img/slider-3.png']
      }
    },
    methods: {},
    created() {
    },
    components: {}
  };
</script>

<style lang="scss" rel="stylesheet/scss" scope>
  .slider{
    width:1200px;
    margin:auto;
  }
</style>
