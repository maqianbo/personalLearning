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
    }
  ]
},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router