<template>
  <div class="bfh page">
    <div class="box1"></div>
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
.box1 {
  width: 184px;
  height: 325px;
  background: url('./images/tuzi.png') no-repeat;
  animation: run 1s steps(8) infinite;
}
@keyframes run {
  100% {
    background-position-x: -1472px;
  }
}
</style>