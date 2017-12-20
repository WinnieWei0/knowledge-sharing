<template>
  <div class="login">
    <div class="login-content">
      <img src="../../images/logo.png" alt="">
      <div class="login-form">
        <el-form :model="user" status-icon :rules="formRules" ref="ruleForm2" label-width="70px" class="demo-ruleForm">
          <el-form-item label="用户名" prop="uname">   <!-- prop关联user数据   -->
            <el-input type="text" v-model="user.uname" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="upwd">
            <el-input type="password" v-model="user.upwd" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
            <el-button @click="resetForm('ruleForm2')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        uname:'',
        upwd: ''
      },
      formRules: {
        uname: [
          { required:true,message:'请输入用户名', trigger: "blur" },
          {pattern:/\w{5,12}/,message:'请输入5-12个字符',trigger:'blur'}
          ],
        upwd: [
          {required:true,message:'请输入密码', trigger: "blur" },
          {pattern:/\w{6,18}/,message:'请输入6-18个字符',trigger:'blur'}
          ]
      }
    };
  },
  created(){
    console.log('loginnnnnn');
  },
  methods: {
    login(){
      this.$axios.post(this.$api.login,this.user)
          .then((res)=>{
            console.log(res);
            if(!res.data.status){
              localStorage.setItem('user',JSON.stringify(res.data.message));
            this.$router.push('/');  //跳转
            }else{
              alert('账号或密码错误')
            }
          });
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.login();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    // 重置表单,refs获取表单元素
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style scoped lang="less">
.login {
  height: 100%;
  background-color: #267cb7;
  &-content {
    width: 350px;
    height: 250px;
    border: 1px solid #ccc;
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%);
    border-radius: 5px;
    text-align: center;
  }
  &-form {
    padding: 5px 10px;
  }
}
</style>