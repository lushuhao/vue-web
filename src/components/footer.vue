<template>
  <div class="footer">
    <div class="content-wrapper">
      <p>{{company.ICP}}</p>
      <p><span>电话: {{company.phone}}</span><span>地址: {{company.address}}</span></p>
      <p>免责声明: {{company.disclaimer}}</p>
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
  .footer {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 140px;
    text-align: center;
    color: #666;
  }
</style>
