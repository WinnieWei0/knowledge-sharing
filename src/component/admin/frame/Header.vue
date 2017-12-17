<template>
  <div>
<el-dropdown @command="handleCommand">
  <span class="el-dropdown-link">
    你好,{{user.uname}}<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item command="a">修改密码</el-dropdown-item>
    <el-dropdown-item command="logout">退出账号</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        user: JSON.parse(localStorage.getItem('user'))
      }
    },
     methods: {
       logout(){
         localStorage.clear();
         this.$router.push('/login');
       },
      handleCommand(command) {
        switch(command){
          case 'logout':
          this.logout();
          break;
        }
      }
    }
  }
</script>

<style scoped lang="less">
.el-dropdown-link{
  font-size: 16px;
}
</style>