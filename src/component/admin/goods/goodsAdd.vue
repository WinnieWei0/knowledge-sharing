<template>
<div>
<el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item>首页</el-breadcrumb-item>
  <el-breadcrumb-item>购物商城</el-breadcrumb-item>
  <el-breadcrumb-item>内容管理</el-breadcrumb-item>
  <el-breadcrumb-item>添加内容</el-breadcrumb-item>
</el-breadcrumb>
<div class="content">
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-row :gutter="20">
  <el-col :span="12"><div class="grid-content bg-purple">
    <el-form-item label="活动名称" prop="name">
    <el-input></el-input>
  </el-form-item>
    </div></el-col>
  <el-col :span="12"><div class="grid-content bg-purple">
    <el-form-item label="活动名称" prop="name">
    <el-input></el-input>
  </el-form-item>
    </div></el-col>
</el-row>
<el-row :gutter="20">
  <el-col :span="6" :offset="4">
    <el-form-item>
    <el-button type="primary">立即创建</el-button>
    <el-button>重置</el-button>
  </el-form-item>
</el-col>
</el-row>
</el-form>
</div>
</div>
</template>

<script>
export default {
  data() {
    return {
      query: {
        pageIndex: 1,
        pageSize: 10,
        searchvalue: ""
      },
      totalCount: 400,
      dataList: []
    };
  },
  methods: {
    getDataList() {
      this.$axios.get(this.$api.gsList, { params: this.query }).then(res => {
        console.log(res);
        this.dataList = res.data.message;
        this.totalCount = res.data.totalcount;
      });
    },
    changePageSize(pageSize) {
      this.query.pageSize = pageSize;
      this.getDataList();
    },
    changeCurrentPage(pageIndex) {
      this.query.pageIndex = pageIndex;
      this.getDataList();
    }
  },
  created() {
    this.getDataList();
  }
};
</script>

<style scoped lang="less">
.content {
  margin-top: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
}
.el-breadcrumb {
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
}
a {
  color: blue;
}
// 内容
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>