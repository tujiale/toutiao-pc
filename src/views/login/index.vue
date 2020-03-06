<template>
  <div class='login'>
    <!-- 表单 -->
    <el-card class='login-card'>
      <!-- 表单内容 -->
      <!-- 头部logo部分 -->
       <div class='title'>
         <img src="../../assets/img/logo_index.png" alt="">
       </div>
       <!-- 表单 -->
       <el-form ref="loginForm" :model="loginForm" :rules="loginRules" style="margin-top:20px">
         <!-- 表单容器 -->
         <el-form-item prop="mobile">
           <!-- 表单域 -->
           <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
         </el-form-item>
         <el-form-item prop="code">
         <!-- 验证码 -->
           <el-input v-model="loginForm.code" :model="loginForm"  :rules="loginRules" style="width:60%" placeholder="请输入验证码"></el-input>
           <!-- 放置一个按钮 -->
           <el-button style="float:right" plain>发送验证码</el-button>
         </el-form-item>
         <!-- 表单域 -->
         <el-form-item prop="checked">
           <!-- 是否同意条款 -->
           <el-checkbox v-model="loginForm.checked">我已阅读同意用户协议和隐私条款</el-checkbox>
         </el-form-item>
         <!-- 按钮 -->
         <el-form-item>
           <el-button @click="login" style="width:100%" type="primary">登录</el-button>
         </el-form-item>
       </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        mobile: '', // 手机号
        code: '', // 验证码
        checked: false // 是否同意协议
      },
      loginRules: {
        mobile: [{ required: true, message: '您的手机号不能为空' }, {
          pattern: /^1[3-9]\d{9}$/, // 正则表达式
          message: '您的手机号格式不正确'
        }],
        code: [{ required: true, message: '您的验证码不能为空' }, {
          pattern: /^\d{6}$/, // 要求6个数字
          message: '验证码应该是6位数字'
        }],
        checked: [{
          validator: function (rule, value, callback) {
            value ? callback() : callback(new Error('您必须同意我们的条款'))
          }
        }]
      }
    }
  },
  methods: {
    login () {
      // this.$refs.loginForm.validate(function (isOK) {
      //   if (isOK) {
      //     console.log('校验通过')
      //   } else {
      //     console.log('校验未通过')
      //   }
      // })
      this.$refs.loginForm.validate().then(() => {
        // 如果成功通过 校验就会到达 then
        // alert(123)
        this.$axios({
          url: '/authorizations', // 请求地址
          data: this.loginForm, // body请求体参数
          method: 'post'
        }).then(result => {
          // 把钥匙放在兜里 也就是把token存于 本地缓存
          window.localStorage.setItem('user-token', result.data.token)
          this.$router.push('/home') // 登录成功 跳转到home页
        }).catch(() => {
          this.$message.error('用户名或者验证码错误')
        })
      })
    }
  }
}

</script>

<style lang='less' scoped>
.login  {
    background-image: url('../../assets/img/back.jpg');
    height: 100vh;
     background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    .login-card {
      width: 440px;
      height: 350px;
      .title {
        text-align: center;
        margin-bottom: 30px;
        img {
          height: 45px;
        }
      }
    }
  }
</style>
