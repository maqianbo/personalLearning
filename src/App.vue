<template>
  <div id="app">
    <keep-alive>
      <!-- 被缓存的路由 -->
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <!-- 不被缓存的路由 -->
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>
<style lang="scss">
#app {
  height: 100%;
}
</style>
