<template>
  <div class="bfh page">
    <div class="content">
      <div
        class="yudi"
        v-for="(item,index) in ydArr"
        :key="index"
        :style="{left:item.left+ 'px',top:item.top+ 'px','animation-delay':item.delayTime+ 's'}"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ydArr: []
    };
  },
  created() {
    this.stratYd();
  },
  methods: {
    stratYd() {
      let win =
        document.documentElement.clientWidth || document.body.clientWidth;
      for (let i = 0; i < 30; i++) {
        let left = parseInt(Math.random() * (win - 5));
        let top = parseInt(Math.random() * 200);
        let delayTime = Math.random() * (2.5 - 1.2 + 1) + 1.2; // 时间 1.2和1.2这个数值保持一样
        let yudiOnj = {
          left,
          top,
          delayTime
        };
        this.ydArr.push(yudiOnj);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.content {
  height: 100%;
  position: relative;
  border: 1px dotted red;
  background: #fff;
  overflow: hidden;
  .yudi {
    position: absolute;
    width: 7px;
    height: 15px;
    clip-path: ellipse(10% 40% at 50% 50%);
    background: teal;
    animation: drops 1s ease-in infinite;
  }
}
@keyframes drops {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translate3d(10px, 100vh, -10px);
  }
}
</style>