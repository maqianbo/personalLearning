<template>
  <div class="page bfh">
    <div class="toolbar">
      <a href="javascript:;" class="toolbar-item" v-for="(item,index) in toolBarArr" :key="index">
        <div class="toolbar-item-wrap">
          <div class="toolbar-btn">
            <div class="toolbar-icon">
              <i :class="item.icon"></i>
            </div>
            <div class="toolbar-text">{{item.text}}</div>
          </div>
        </div>
        <div class="toolbar-layout" v-if="item.img"></div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toolBarArr: [
        { icon: 'el-icon-user-solid', text: '账号', img: '1' },
        { icon: 'el-icon-s-comment', text: '微信', img: '2' },
        { icon: 'el-icon-s-order', text: '备忘录', img: '' },
        { icon: 'el-icon-s-unfold', text: '选择', img: '' }
      ]
    };
  },
  created() {},
  methods: {}
};
</script>
<style lang="scss" scoped>
$item-width: 50px; //每个工具item的宽高
.toolbar {
  position: fixed;
  left: 50%;
  top: 50%;
  width: $item-width;
  margin-left: $item-width / 2;
  border-radius: 5%;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.3),
    0px 0px 10px rgba(0, 0, 0, 0.1) inset;
}
.toolbar-item {
  position: relative;
  display: block;
  width: $item-width;
  height: $item-width;
  border-bottom: 1px solid #ededed;
  &:last-child {
    border-bottom: none;
  }
}
.toolbar-item-wrap {
  position: relative;
  width: $item-width;
  height: $item-width;
  overflow: hidden;
  .toolbar-btn {
    width: $item-width;
    height: $item-width * 2;
    text-align: center;
    line-height: $item-width;
    &:hover {
      .toolbar-icon {
        top: -$item-width;
      }
      .toolbar-text {
        top: 0;
      }
    }
    .toolbar-icon {
      i {
        font-size: $item-width / 2;
      }
      position: absolute;
      top: 0;
      width: 100%;
      height: $item-width;
      transition: top 1s;
    }
    .toolbar-text {
      position: absolute;
      top: $item-width;
      width: 100%;
      height: $item-width;
      font-size: 16px;
      font-weight: 600;
      transition: top 1s;
    }
  }
}
.toolbar-layout {
  position: absolute;
  right: $item-width + 5px;
  bottom: 0;
  width: 30px;
  height: 40px;
  background: teal;
  opacity: 0;
}
.toolbar-item:hover {
  .toolbar-layout {
    opacity: 1;
    transform: scale(5);
    transform-origin: right bottom;
    transition: transform 1s;
  }
}
</style>