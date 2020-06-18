<template>
  <div class="bfh">
    <h2 class="introduceTitle two">圣杯布局</h2>
    <div class="container">
      <div class="main common"></div>
      <div class="left common"></div>
      <div class="right common"></div>
    </div>
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
// .container {
//   padding-left: 150px;
//   padding-right: 250px;
// }
// .common {
//   float: left;
//   height: 80px;
// }
// .main {
//   width: 100%;
//   background: red;
// }
// .left {
//   width: 150px;
//   background: teal;
//   position: relative;
//   left: -150px;
//   margin-left: -100%;
// }
// .right {
//   float: right;
//   width: 250px;
//   background: pink;
//   position: relative;
//   right: -250px;
//   margin-left: -200%;
// }
// .container::after {
//   display: block;
//   content: '';
//   clear: both;
// }
.container {
  margin-left: 120px;
  margin-right: 220px;
}
.main {
  float: left;
  width: 100%;
  height: 300px;
  background: green;
}
.left {
  position: relative;
  left: -120px;
  float: left;
  height: 300px;
  width: 100px;
  margin-left: -100%;
  background: red;
}
.right {
  position: relative;
  right: -220px;
  float: right;
  height: 300px;
  width: 200px;
  margin-left: -200px;
  background: blue;
}
</style>