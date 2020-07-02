import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


const routes = [{
  path: '/',
  redirect: '/home'
},
{
  path: '/test',
  name: 'test',
  component: () => import('@/views/test/index.vue')
},
{
  path: '/login',
  name: 'login',
  component: () => import('@/views/login/index.vue')
},
{
  path: '/home',
  name: 'home',
  component: () => import('@/views/home/index.vue'),
  redirect: '/home/layout/sfybj',
  children: [
    {
      path: 'layout',
      name: 'layout',
      component: () => import('@/views/layout/index.vue'),
      redirect: '/home/layout/sfybj',
      children: [
        {
          path: 'sfybj',
          name: 'sfybj',
          component: () => import('@/views/layout/sfybj.vue'),
        },
        {
          path: 'sbbj',
          name: 'sbbj',
          component: () => import('@/views/layout/sbbj.vue'),
        }
      ]
    },
    {
      path: 'modal',
      name: 'modal',
      component: () => import('@/views/modal/index.vue'),
    },
    {
      path: 'calendar',
      name: 'calendar',
      component: () => import('@/views/calendar/index.vue'),
    },
    {
      path: 'zjXrSx',//组件渲染顺序1
      name: 'zjXrSx',
      component: () => import('@/views/zjXrSx/index.vue'),
    },
    {
      path: 'zjXrSx2',//组件渲染顺序2   keepAlive
      name: 'zjXrSx2',
      component: () => import('@/views/zjXrSx/zjXrSx2.vue'),
      meta: {
        keepAlive: true
      }
    },
    {
      path: 'animation',//组件渲染顺序2   keepAlive
      name: 'animation',
      component: () => import('@/views/animation/index.vue'),
      redirect: '/home/animation/jichu',
      children: [
        {
          path: 'jichu',//组件渲染顺序2   keepAlive
          name: 'jichu',
          component: () => import('@/views/animation/jichu.vue'),
        },
        {
          path: 'tuzi',//组件渲染顺序2   keepAlive
          name: 'tuzi',
          component: () => import('@/views/animation/tuzi.vue'),
        },
        {
          path: 'luoyu',//组件渲染顺序2   keepAlive
          name: 'luoyu',
          component: () => import('@/views/animation/luoyu.vue'),
        }
      ]
    },
    {
      path: 'excel',
      name: 'excel',
      component: () => import('@/views/excel/index.vue'),
      redirect: '/home/excel/daochu',
      children: [
        {
          path: 'daochu',
          name: 'daochu',
          component: () => import('@/views/excel/daochu.vue'),
        },
        {
          path: 'dayin',
          name: 'dayin',
          component: () => import('@/views/excel/dayin.vue'),
        },
      ]
    },
    {
      path: 'shadow',
      name: 'shadow',
      component: () => import('@/views/shadow/index.vue'),
    },
    {
      path: 'toolBar',
      name: 'toolBar',
      component: () => import('@/views/toolBar/index.vue'),
    },
    {
      path: 'fullScreen',
      name: 'fullScreen',
      component: () => import('@/views/fullScreen/index.vue'),
    },
  ]
},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router