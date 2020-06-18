<template>
  <div class="bfh">
    <h2 class="introduceTitle two">双飞翼布局</h2>
    <div class="content">
      <div class="main"></div>
    </div>
    <div class="left"></div>
    <div class="right"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.content {
  float: left;
  width: 100%;
}
.main {
  height: 200px;
  margin-left: 110px;
  margin-right: 220px;
  background: green;
}
.main::after {
  content: '';
  display: block;
  font-size: 0;
  height: 0;
  zoom: 1;
  clear: both;
}
.left {
  float: left;
  height: 200px;
  width: 100px;
  margin-left: -100%;
  background: red;
}
.right {
  float: right;
  height: 200px;
  width: 200px;
  margin-left: -200px;
  background: blue;
}
</style>