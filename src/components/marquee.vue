<template>
  <div class="marquee-wrapper">
    <div class="center">
      <marquee class="marquee" behavior="scroll" direction="left" onMouseOut="this.start()" onMouseOver="this.stop()">
        <span class="content" v-for="(content, key) in company.marquee">{{content}}</span></marquee>
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
      return {}
    },
    methods: {},
    created() {
    },
    components: {}
  };
</script>

<style lang="scss" rel="stylesheet/scss" scope>
  .marquee-wrapper {
    height: 46px;
    line-height: 46px;
    .center {
      width: 1200px;
      margin: auto;
      .marquee {
        color: #993233;

        .content:not(first-child) {
          margin-left: 300px;
        }
        .content {
          cursor: pointer;
          padding: 10px 20px;

        }
      }
    }

  }
</style>
