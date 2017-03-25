<template>
  <div id="app">
    <v-header :company="company"></v-header>
    <v-menu></v-menu>
    <v-slider :company="company"></v-slider>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <v-footer :company="company"></v-footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from 'components/header.vue'
  import menu from 'components/menu.vue'
  import slider from 'components/slider.vue'
  import footer from 'components/footer.vue'
  export default {
    data () {
      return {
        company: {}
      }
    },
    created () {
      this.getInfo()
    },
    activated () {
      this.getInfo()
    },
    methods: {
      getInfo: function () {
        this.$http.get('/api/company').then((response) => {
          this.company = response.data.data
        })
      }
    },
    components: {
      'v-header': header,
      'v-menu': menu,
      'v-slider': slider,
      'v-footer': footer
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  body, html {
    overflow-x: hidden;
  }

  #app {
    min-width: 1200px;
    background-color: #f5f5f5;
  }
</style>
