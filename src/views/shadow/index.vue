<template>
  <div class="bfh page">
    <div class="wrap effect">shadow effect</div>
    <div>
      <ul class="content">
        <li>
          <img src="./images/person.jpg" alt />
        </li>
        <li>
          <img src="./images/person.jpg" alt />
        </li>
        <li>
          <img src="./images/person.jpg" alt />
        </li>
      </ul>
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
.wrap {
  position: relative;
  width: 300px;
  height: 150px;
  margin: 10px auto;
  text-align: center;
  line-height: 150px;
  font-size: 20px;
  font-weight: 700;
}
.effect {
  background: #fff;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.3),
    0px 0px 10px rgba(0, 0, 0, 0.1) inset;
}
.effect::before,
.effect::after {
  content: '';
  position: absolute;
  z-index: -1;
  top: 50%;
  left: 8px;
  right: 8px;
  bottom: -1px;
  border-radius: 40%/10%;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.8);
}
.content {
  width: 980px;
  height: 350px;
  margin: 0 auto;
  li {
    float: left;
    position: relative;
    width: 300px;
    height: 210px;
    margin: 70px 10px;
    padding: 5px;
    border: 1px solid #ededed;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 5px rgba(0, 0, 0, 0.1) inset;

    &:before {
      content: '';
      position: absolute;
      z-index: -1;
      width: 80%;
      height: 85%;
      left: 15px;
      bottom: 15px;
      background: transparent;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.6);
      transform: skew(-12deg) rotate(-8deg);
    }

    &:after {
      content: '';
      position: absolute;
      z-index: -1;
      width: 90%;
      height: 80%;
      right: 18px;
      bottom: 8px;
      background: transparent;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.6);
      transform: skew(12deg) rotate(4deg);
    }

    img {
      width: 100%;
      height: 100%;
      font-size: 0;
    }
  }
}
</style>