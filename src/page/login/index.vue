<template>
  <div class="login flex-row-c-c">

    <div class="login-box flex-row--c">
      <img src="/static/img/emails-rafiki.png" alt="" style="width: 50%;">
      <div class="login-form" style="flex: 1;">
        <div class="top flex-col--c">
          <img src="/static/img/logo2.png" style="width: 150px" alt="" class="logo">
          <span style="font-size: 15px">账号登录</span>
        </div>

        <div class="form" style="margin-top: 20px">
          <el-form ref="Loginform" :model="subForm" :rules="rules">
            <el-form-item prop="name">
              <el-input placeholder="请输入账号" v-model="subForm.name" type="text" required/>
            </el-form-item>
            <el-form-item prop="password" style="margin-bottom: 0">
              <el-input placeholder="请输入密码" type="password" v-model="subForm.password" required/>
            </el-form-item>

            <el-form-item style="display: flex; justify-content: flex-start; background: transparent">
              <el-checkbox v-model="checked">自动登录</el-checkbox>
            </el-form-item>
          </el-form>

          <el-button
            style="width: 100%;background: linear-gradient(180deg, #44DB90 0%, #2CCC7C 100%);"
            type="success"
            @keydown.enter="submitForm"
            @click="submitForm">
            登录
          </el-button>
        </div>
      </div>
    </div>

    <footer class="footer flex-col-c-c">
      <p>春播万象大数据平台</p>
      <p>copyright © 2021 春播万象（北京）科技有限公司</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      subForm: {
        name: "",
        password: ""
      },
      checked: false,
      rules: {
        name: [{required: true, message: "请输入用户名", trigger: "blur"}],
        password: [{required: true, message: "请输入密码", trigger: "blur"}]
      }
    }
  },
  methods: {
    //点击登录
    submitForm() {
      this.$refs.Loginform.validate(valid => {
        if (valid) {
          this.login();
          localStorage.setItem("name", this.subForm.name);
        } else {
          this.$message.error("请输入账号和密码");
          console.log("error submit!!");
          return false;
        }
      });
    },
    async login() {
      //发起http请求登录
      const {status_code, data, message} = await this.$api.login(this.subForm);
      if (!status_code) {
        this.$message.success("登录成功");
        localStorage.setItem("sign", data.sign);
        this.$router.push("/");
      } else {
        this.$message.error(message);
      }
    }
  }
}
</script>
<style lang='scss' scoped>
.login {
  width: 100%;
  height: 100vh;
  background: url("/static/img/login-bg.png") no-repeat;
  background-size: cover;
  position: relative;

  .login-box {
    width: 742px;
    height: 408px;
    background: #FFFFFF;
    border-radius: 20px;

    .login-form {
      padding: 0 50px;

      .top {
        span {
          font-size: 17px;
          //font-weight: bold;
          line-height: 20px;
          color: #333333;

        }
      }

      .form {
        width: 100%;

      }

    }

  }

  .footer {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);

    p {
      &:first-child {
        font-size: 22px;
        font-weight: bold;
        line-height: 30px;
        color: #FFFFFF;
        opacity: 0.8;
      }

      &:last-child {
        margin-top: 3px;
        font-size: 16px;
        font-weight: 400;
        line-height: 22px;
        color: #FFFFFF;
        opacity: 0.8;
      }
    }
  }
}
</style>


