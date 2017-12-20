<template>
<div>
<el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item>首页</el-breadcrumb-item>
  <el-breadcrumb-item>购物商城</el-breadcrumb-item>
  <el-breadcrumb-item>内容管理</el-breadcrumb-item>
</el-breadcrumb>
<div class="tools">
<div class="btn">
  <el-button size="small" icon="el-icon-plus" @click="getToPage('add')">添加</el-button>
  <el-button size="small" icon="el-icon-check">全选</el-button>
  <el-button size="small" icon="el-icon-delete">删除</el-button>
</div>
<div class="searchtxt">
  <el-input v-model="query.searchvalue" @change="getDataList" placeholder="请输入搜索内容" prefix-icon="el-icon-search" size="small">
  </el-input>
</div>
</div>
<el-table
height="400"
    ref="multipleTable"
    :data="dataList"
    tooltip-effect="dark"
    style="width: 100%">
    <el-table-column type="selection" width="55">
    </el-table-column>
    <el-table-column label="标题" prop="title">
    </el-table-column>
    <el-table-column prop="categoryname" label="所属类别" width="100">
    </el-table-column>
    <el-table-column prop="stock_quantity" label="库存" width="100">
    </el-table-column>
    <el-table-column prop="market_price" label="市场价" width="100">
    </el-table-column>
    <el-table-column prop="sell_price" label="销售价" width="100">
    </el-table-column>
    <el-table-column prop="name" label="属性" width="100">
      <!-- scope.row可以获取vue内的数据 -->
      <template slot-scope="scope">
        <i :class="['el-icon-picture-outline',scope.row.is_slide?'active':'']"></i>
        <i :class="['el-icon-star-on',scope.row.is_top?'active':'']"></i>
        <i :class="['el-icon-upload2',scope.row.is_hot?'active':'']"></i>
      </template>
    </el-table-column>
    <el-table-column prop="name" label="操作" width="100">
      <template slot-scope="scope">
        <!-- <a href="goods/edit/:id" prop='id'>删除</a> -->
        <router-link :to="{name:'ge',params:{id:scope.row.id}}">编辑</router-link>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination 
  @size-change="changePageSize" @current-change="changeCurrentPage"
      :total="totalCount"
      :current-page="query.pageIndex"
      :page-size="query.pageSize"
      :page-sizes="[10,20, 30, 40,100,200]"
      layout="total, sizes, prev, pager, next, jumper">
    </el-pagination>
</div>
</template>

<script>
export default {
  data(){
    return {     
      query:{
        pageIndex:1,
        pageSize:10,
        searchvalue:''
      },
      totalCount:400,
      dataList:[]
    }
  },
  methods:{
    getDataList(){
      this.$axios.get(this.$api.gsList,{params:this.query}).then((res)=>{
        // console.log(res)
        this.dataList=res.data.message;
        this.totalCount=res.data.totalcount;
      });
    },
    changePageSize(pageSize){
      this.query.pageSize=pageSize;
      this.getDataList();
    },
    changeCurrentPage(pageIndex){
      this.query.pageIndex=pageIndex;
      this.getDataList();
    },
    getToPage(page){
      this.$router.push(page);
    }
  },
  created(){
    this.getDataList();
  }
};
</script>

<style scoped lang="less">
.el-breadcrumb {
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
}
.tools {
  // 最外层没高度,clear:both清浮动无效
  overflow: hidden;
  padding: 10px 0;
  .btn {
    float: left;
  }
  .searchtxt {
    float: right;
  }
}
a{
  color: blue;
}

</style>