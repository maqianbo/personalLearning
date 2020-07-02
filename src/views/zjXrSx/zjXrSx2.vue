<template>
  <div>
    <p>组件渲染顺序测试 keepalive</p>
    <p>consoel.log()查看</p>
    <div>第一次点进页面 created -> watch监听name -> activated -> watch监听到name发生了变化</div>
    <div>第二次进入页面 route路由 -> activated</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '123'
    };
  },
  computed: {
    secondName() {
      console.log('computed监听到name发生了变化');
    }
  },
  watch: {
    $route(to, from) {
      console.log('to,from', to.name, from.name);
    },
    name() {
      console.log('watch监听到name发生了变化', this.name);
    }
  },
  created() {
    console.log('created');
    this.name = '你好';
  },
  activated() {
    console.log('activated');
    this.name = 'hello';
  },
  mounted() {
    console.log('mounted');
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
</style>