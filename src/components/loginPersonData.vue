<template>
  <div class="all">
    <!-- <div>
      <img
        src="https://gitee.com/adya/images/raw/master/img/lALPDgQ9zchxJh3NA6nNB28_1903_937.png"
      class="oute1">
    </div> -->
    <div class="login_box">
      <div class="cc">
        <img
          src="https://gitee.com/adya/images/raw/master/img/lALPDhYBRwiR4kFMbA_108_76.png"
          class="bb"
        />
        <div style="font-size: 0.5rem">个人信息</div>
      </div>
      <div class="xinxi">
        <el-form label-width="60px" class="dd">
          <div class="tt">
            <i>🖊</i>
            <el-form-item label="昵 称">
              <el-input style="width: 6rem"></el-input>
            </el-form-item>
          </div>
          <div class="tt">
            <i>📱</i>
            <el-form-item label="手机号">
              <el-input style="width: 6rem"></el-input>
            </el-form-item>
          </div>
          <div class="tt">
            <i>♀♂</i>
            <el-form-item label="性 别">
              <el-radio-group style="width: 6rem">
                <el-radio :label="3">♀女</el-radio>
                <el-radio :label="6">♂男</el-radio>
              </el-radio-group>
            </el-form-item>
          </div>
          <div class="tt">
            <i>🎂</i>
            <el-form-item label="生日">
              <el-input style="width: 6rem"></el-input>
            </el-form-item>
          </div>
          <div class="tt">
            <i>🐧</i>
            <el-form-item label="QQ">
              <el-input style="width: 6rem"></el-input>
            </el-form-item>
          </div>
           <div class="submit">
          <el-button class="pp" type="info" style="">保存</el-button>
        </div>
        </el-form>
        <!-- <div class="submit">
          <el-button class="pp" type="info" style="">保存</el-button>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: "",
    };
  },
  methods:{
    clickExit(){}
  }
};
</script>

<style>
/* .all {
  background: url("https://gitee.com/adya/images/raw/master/img/lALPDgQ9zchxJh3NA6nNB28_1903_937.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
} */
.all {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -10;
  zoom: 1;
  background-color: #fff;
  background: url("https://gitee.com/adya/images/raw/master/img/lALPDgQ9zchxJh3NA6nNB28_1903_937.png");
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center 0;
}
body,
html {
  width: 100%;
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
}
.login_box {
  /* background-image:url("https://gitee.com/adya/images/raw/master/img/lALPDgQ9zchxJh3NA6nNB28_1903_937.png") ;
  background-repeat: no-repeat; */
  width: 12rem;
  height: 13rem;

  background-color: white;
  border-radius: 3px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.aa {
  height: 85px;
  display: block;
  margin-top: 40px;
  /* text-align: center; */
  /* margin: 25px auto; */
}
.bb {
  text-align: center;
  vertical-align: middle;
  display: inline-block;
  width: 1.3rem;
  height: 1.3rem;
  border-radius: 50%;
}
.cc {
  height: 2.2rem;
  text-align: center;
}
.xinxi {
  height: 12rem;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;

}
.btn_login {
  margin-left: -5px !important;
  color: #fbfdfe;
  background-color: transparent;
  border-style: none;
}
.btn_login :hover {
  background-color: transparent;
}
.dd {
  color: #003758;
  /* margin-top: 15px; */
}
.ee {
  font-size: 20px;
  text-align: center;
  color: #003758;
}

.submit {
  margin: 0 auto;
  text-align: center;
  /* margin-top: 30px; */
}

.bb {
  /* margin-top: -0.6rem !important; */
  /* text-align: center; */
  margin: 0 auto;
  /* background-color: white; */
}
.cc {
  height: 2.2rem;
  /* background-color: rgba(224, 87, 33, 0.5); */
}
.submit {
  /* margin: 0.5rem auto !important; */
  text-align: center;
  /* width: 2rem; */
  /* margin-bottom: 1rem; */
}
.tt {
  font-size: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding:0.2rem; */
  margin-bottom: 0.2rem;
}
/* .dd {
  margin-top: 1rem !important;
} */
.pp {
  /* width: 120px !important; */
  width: 2rem;
  height: 1rem;
  /* background-color: #162d4f !important; */
  /* margin-bottom: 4px !important; */
  /* margin-top: 4px !important; */
}
.sureEdit {
  text-align: center;
}
.sureEdit {
  font-size: 19px;
  text-align: center;
  /* margin-top: 40px; */
}
.quxiaoEdit {
  width: 1.5rem;
  height: 0.5rem;
}
.InfoEdit {
  width: 15rem;
  margin: 0 auto;
}
P {
  font-size: 0.4rem;
  color: #000;
}
.imgs {
  float: left;
  width: 1.3rem;
  height: 1.3rem;
  border-radius: 50%;
}
.imgs img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.autograph {
  margin-left: 1.7rem;
  /* display: flex;
  justify-content: space-around; */
  /* margin-top: 0.15rem; */
}
</style>