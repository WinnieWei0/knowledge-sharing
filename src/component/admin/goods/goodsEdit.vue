<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item>购物商城</el-breadcrumb-item>
      <el-breadcrumb-item>内容管理</el-breadcrumb-item>
      <el-breadcrumb-item>编辑内容</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="content">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-row>
          <el-col :span="12">
            <el-form-item label="内容标题" prop="title">
              <el-input v-model="ruleForm.title"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="副标题" prop="sub_title">
              <el-input v-model="ruleForm.sub_title"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="所属类别" prop="category_id">
              <el-select v-model="ruleForm.category_id" placeholder="请选择活动区域">
                <el-option v-for="item in categoryList" :key="item.category_id" :label="item.title" :value="item.category_id">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="是否发布" prop="status">
              <el-switch v-model="ruleForm.status"></el-switch>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="推荐类型" prop="delivery">
              <el-switch v-model="ruleForm.is_slide" active-value="轮播图"></el-switch>
              <el-switch v-model="ruleForm.is_top"></el-switch>
              <el-switch v-model="ruleForm.is_hot"></el-switch>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="上传封面" prop="delivery">
              <el-upload class="upload-demo" :action="imgUrl" :on-success="uploadImg" :file-list="ruleForm.imgList" list-type="picture">
                <el-button size="small" type="primary">点击上传</el-button>
              </el-upload>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="上传附件" prop="delivery">
              <el-upload class="upload-demo" :action="fileUrl" :on-success="uploadFile" multiple :limit="3" :file-list="ruleForm.fileList">
                <el-button size="small" type="primary">点击上传</el-button>
              </el-upload>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <el-form-item label="商品货号" prop="goods_no">
              <el-input v-model="ruleForm.goods_no"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="库存数量" prop="stock_quantity">
              <el-input v-model="ruleForm.stock_quantity"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="市场价格" prop="market_price">
              <el-input v-model="ruleForm.market_price"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="销售价格" prop="sell_price">
              <el-input v-model="ruleForm.sell_price"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item label="内容摘要" prop="zhaiyao">
          <el-input type="textarea" v-model="ruleForm.zhaiyao"></el-input>
        </el-form-item>
        <el-form-item class="form-content" label="详细内容" prop="content">
          <quill-editor v-model="ruleForm.content"></quill-editor>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交保存</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import api, { domain } from "../../../js/api_config";
import { quillEditor } from "vue-quill-editor";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
export default {
  data() {
    return {
      ruleForm: {},
      // 分类列表
      categoryList: [],
      id: this.$route.params.id,
      imgUrl: domain + api.atImg,
      fileUrl: domain + api.atFile,
      rules: {
        title: [{ required: true, message: "请输入内容标题", trigger: "blur" }],
        sub_title: [{ required: true, message: "请副标题", trigger: "blur" }],
        category_id: [
          { required: true, message: "请选择所属类别", trigger: "change" }
        ],
        goods_no: [{ required: true, message: "请输入货号", trigger: "blur" }],
        stock_quantity: [{ required: true, message: "请输入库存", trigger: "blur" }],
        market_price: [{ required: true, message: "请输入市场价", trigger: "blur" }],
        sell_price: [{ required: true, message: "请输入销售价", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.setGoods();
        } else {
          alert("修改失败");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    uploadImg(data) {
      this.ruleForm.imgList = [data]; //只需要一个图片,直接赋值数组
    },
    uploadFile(data) {
      this.ruleForm.fileList.push(data);
    },
    // 编辑商品
    setGoods() {
      this.$axios.post(this.$api.gsEdit + this.id, this.ruleForm).then(res => {
        if (res.data.status == 0) {
          this.$router.push("/goods/list");
        }
      });
    },
    // 获取分类
    getCategoryList() {
      this.$axios.get(this.$api.ctList + "goods").then(res => {
        // console.log(res.data.message);
        this.categoryList = res.data.message;
      });
    },
    // 获取商品
    getGoods() {
      this.$axios.get(this.$api.gsDetail + this.id).then(res => {
        // console.log(res.data.message);
        res.data.message.category_id = +res.data.message.category_id;
        this.ruleForm = res.data.message;
      });
    }
  },
  created() {
    this.getCategoryList();
    this.getGoods();
  },
  components: {
    quillEditor
  }
};
</script>

<style scoped lang="less">
.content {
  height: 900px;
  margin-top: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  background-color: white;
}
.el-breadcrumb {
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
}
a {
  color: blue;
}
// 内容
.quill-editor,
.form-content {
  height: 300px;
}
</style>