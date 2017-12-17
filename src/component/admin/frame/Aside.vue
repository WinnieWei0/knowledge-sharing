<template>
  <div class="aside">
    <img src="../../../images/logo.png" alt="">
<el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="rgb(38, 124, 183)"
      text-color="#fff" unique-opened='true'
      active-text-color="#ffd04b">
      <!-- key指定唯一对象,优化性能,局部刷新;index获取唯一列表 -->
      <el-submenu v-for="item in menuList" :key="item.title" :index="item.title">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{item.title}}</span>
        </template>
          <el-menu-item v-for="subItem in item.children" :key="subItem.title" :index="subItem.title">
            <router-link :to="subItem.path">{{subItem.title}}</router-link>
          </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuList: [
        {title:'学员问题汇总',children:[
          {title:'内容管理',path:'/'},
          {title:'类别管理',path:'/'},
          {title:'评论管理',path:'/'}
        ]
        },
        {title:'前端常用功能',children:[
          {title:'内容管理',path:'/'},
          {title:'类别管理',path:'/'},
          {title:'评论管理',path:'/'}
        ]
        },
        {title:'重难点专区',children:[
          {title:'内容管理',path:'/'},
          {title:'类别管理',path:'/'},
          {title:'评论管理',path:'/'}
        ]
        },
        {title:'资源下载',children:[
          {title:'内容管理',path:'/'},
          {title:'类别管理',path:'/'},
          {title:'评论管理',path:'/'}
        ]
        },
        {title:'购物商城',children:[
          {title:'内容管理',path:'/goods/list'},
          {title:'类别管理',path:'/'},
          {title:'评论管理',path:'/'}
        ]
        },
        {title:'订单管理',children:[
          {title:'订单列表',path:'/'}
        ]
        },
      ]
    }
  },
};
</script>

<style scoped lang="less">
.aside{
  height: 100%;
  position: relative;
  .el-menu{
  box-sizing: border-box;
    height: 100%;
    text-align: left;
    padding-top: 62px;
  }
  img{
    position: absolute;
    top: 10px;
    left: 0;
    z-index: 2;
  }
}
</style>