<template>
  <div class="page home">
    <el-row class="title">个人前端知识演示系统</el-row>
    <div class="page-main home-content">
      <div class="home-left">
        <el-menu
          class="el-menu-vertical-demo"
          router
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu :index="item.path" v-for="(item,index) in meauArr" :key="index">
            <template slot="title">
              <i :class="item.icon"></i>
              <span>{{item.title}}</span>
            </template>
            <div v-if="item.children">
              <el-menu-item-group v-for="(item1,index) in item.children" :key="index">
                <el-menu-item :index="item1.path">
                  <i :class="item1.icon"></i>
                  <span style="color: inherit;">{{item1.title}}</span>
                </el-menu-item>
              </el-menu-item-group>
            </div>
            <div v-else>
              <el-menu-item :index="item.path">
                <i :class="item.icon"></i>
                <span slot="title">{{item.title}}</span>
              </el-menu-item>
            </div>
          </el-submenu>
        </el-menu>
      </div>
      <div class="home-right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      meauArr: [
        {
          title: 'css布局',
          icon: 'el-icon-s-custom',
          path: '/home/layout/sfybj',
          children: [
            {
              title: '双飞翼布局',
              icon: 'el-icon-s-custom',
              path: '/home/layout/sfybj'
            },
            {
              title: '圣杯布局',
              icon: 'el-icon-s-custom',
              path: '/home/layout/sbbj'
            }
          ]
        },
        {
          title: '模态框使用',
          icon: 'el-icon-s-custom',
          path: '/home/modal'
        }
      ]
    };
  }
};
</script>
<style lang="scss">
.home {
  height: 100%;
}
.home .title {
  font-size: 20px;
  line-height: 60px;
  background: #333;
  color: #fff;
}
.home-content {
  height: calc(100% - 60px);
  display: flex;
  .home-left {
    width: 200px;
    background: #333743;
  }
  .home-right {
    // margin-left: 200px;
    flex: 1;
    height: 100%;
    padding: 20px;
    // width: calc(100% - 210px);
    overflow-x: hidden;
    overflow-y: auto;
    // background: skyblue;
  }
}
.home .el-menu-item-group__title {
  padding: 0;
}
.home .el-submenu__title * {
  color: #fff;
  font-size: 14px;
}
.home .el-menu-item * {
  color: #fff;
  font-size: 14px;
}
.home .el-menu {
  border-right: none;
}
</style>


