<template>
  <el-container>
    <!-- 左侧导航栏 -->
  <el-aside width="200px">
    <app-aside></app-aside>
  </el-aside>
  <el-container>
    <!-- 头部 -->
    <el-header>
      <app-header></app-header>
    </el-header>
    <!-- 底部内容 -->
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
import asideComponent from './frame/Aside.vue';
import headerComponent from './frame/Header.vue';
export default {
  // 创建子组件
  components:{
    appAside:asideComponent,
    appHeader:headerComponent
  }
};
</script>

<style scoped lang="less">
.el-container {
  height: 100%;
  .el-header {
    background-color: #b3c0d1;
    color: #333;
    text-align: right;
    line-height: 60px;
  }

  .el-aside {
    background-color: #d3dce6;
    color: #333;
    text-align: center;
  }

  .el-main {
    background-color: #e9eef3;
    color: #333;
  }
}
</style>