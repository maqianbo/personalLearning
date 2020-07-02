<template>
  <div class="page home">
    <el-row class="title">测试test</el-row>
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
        },
        {
          title: 'calendar日历',
          icon: 'el-icon-s-custom',
          path: '/home/calendar'
        },
        // {
        //   title: '组件渲染数据顺序',
        //   icon: 'el-icon-s-custom',
        //   // path: '/home/zjXrSx',
        //   children: [
        //     {
        //       title: '组件渲染数据顺序1',
        //       icon: 'el-icon-s-custom',
        //       path: '/home/zjXrSx'
        //     },
        //     {
        //       title: '组件渲染数据顺序2',
        //       icon: 'el-icon-s-custom',
        //       path: '/home/zjXrSx2'
        //     }
        //   ]
        // },
        {
          title: '动画使用',
          icon: 'el-icon-s-custom',
          path: '/home/animation/jichu',
          children: [
            {
              title: '基础动画使用',
              icon: 'el-icon-s-custom',
              path: '/home/animation/jichu'
            },
            {
              title: '兔子动画使用',
              icon: 'el-icon-s-custom',
              path: '/home/animation/tuzi'
            },
            {
              title: '落雨动画使用',
              icon: 'el-icon-s-custom',
              path: '/home/animation/luoyu'
            }
          ]
        },
        {
          title: '导出打印',
          icon: 'el-icon-s-custom',
          path: '/home/excel/daochu',
          children: [
            {
              title: '导出功能使用',
              icon: 'el-icon-s-custom',
              path: '/home/excel/daochu'
            },
            {
              title: '打印功能使用',
              icon: 'el-icon-s-custom',
              path: '/home/excel/dayin'
            }
          ]
        },
        {
          title: 'css阴影学习',
          icon: 'el-icon-s-custom',
          path: '/home/shadow'
        },
        {
          title: '工具条使用',
          icon: 'el-icon-s-custom',
          path: '/home/toolBar'
        },
        {
          title: '全屏使用',
          icon: 'el-icon-s-custom',
          path: '/home/fullScreen'
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
    overflow-y: scroll;
    overflow-x: hidden;
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


