<template>
  <div class="bfh page">
    <!-- <div class="box1 demo-1"></div> -->
    <div class="box1 demo-2"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      let box1 = document.querySelector('.box1');
      box1.addEventListener('animationstart', () =>
        console.log('animationstart')
      );
      box1.addEventListener('animationiteration', () =>
        console.log('animationiteration')
      );
      box1.addEventListener('animationend', () => console.log('animationend'));
    }
  }
};
</script>
<style lang="scss" scoped>
.box1 {
  width: 100px;
  height: 100px;
  background: #000;
}
.demo-1 {
  &:hover {
    // width: 300px;
    transform: rotate(45deg);
  }
  // transition: width 2s ease;
  transition: transform 1s ease-out;
}
.demo-2 {
  border-radius: 50%;
  // margin-top: 200px;
  animation: jump 1s cubic-bezier(0.56, 0.04, 0.56, 0.74) infinite alternate;
}
@keyframes jump {
  0% {
    transform: translateY(0px);
  }
  90% {
    transform: translateY(200px);
    clip-path: ellipse(50% 50% at 50% 50%);
  }
  100% {
    transform: translateY(210px);
    clip-path: ellipse(50% 45% at 50% 48%);
  }
}
</style>
