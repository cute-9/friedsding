<template>
  <div>
    <div class="rr">
      <p style="text-align: center; font-size: 0.7rem">他人资料</p>
      <!-- 头像、个性签名、时间 -->
      <div class="headered">
        <!-- 头像 -->
        <div class="imgs">
          <img
            src="https://gitee.com/adya/images/raw/master/img/lALPDhYBRwiR4kFMbA_108_76.png"
            alt=""
          />
        </div>
        <!-- 个性签名 -->
        <div class="autographs">
          <p>一只茶杯猫emo</p>
          <p>09:36 个性签名：这个人很懒，什么也没留下~</p>
        </div>
      </div>
      <el-form label-width="60px" class="dd">
        <div class="tt" style="padding-top: 20px">
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
      </el-form>
    </div>

    <!-- 返回按钮 -->
    <!-- @click="back" -->
    <div v-show="backs">
      <i class="el-icon-back" ></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      backs: false,
    };
  },
  methods: {
    // 返回消息页面
    // back() {
    //   console.log(456);
    //   this.content = true;
    //   this.detail = false;
    //   this.backs = false;
    // },
  },
};
</script>

<style scoped>
.avatar_box {
  float: left;
  display: flex;
  vertical-align: middle;
  width: 1.3rem;
  height: 1.3rem;
  border-radius: 50%;
  /* background: url("https://gitee.com/adya/images/raw/master/img/消息空图片(1).png")
    no-repeat; */
}
.avatar_box img {
  display: flex;
  vertical-align: middle;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #eee;
}
.avatar_text p {
  font-size: 15px !important;
  margin-left: 10px !important;
  margin-top: 40px !important;
  float: left;
  vertical-align: middle;
}
.aa p {
  font-size: 15px !important;
  margin-left: 10px !important;
  float: left;
  vertical-align: middle;
  margin-top: 6px !important;
}
.rr {
  border-radius: 20px;
  margin-top: 20px !important;
  /* text-align: center; */
  margin: 0 auto;
  /* background-color: white; */
  height: 9rem;
}
/* .cc {
  background-color: #77a6b8;
} */
.submit {
  /* margin: 0.5rem auto !important; */
  text-align: center;
  /* margin-bottom: 1rem; */
}
.tt {
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.2rem;
}
/* .dd {
  margin-top: 1.5rem !important;
} */
.headered {
  /* background-color: chocolate; */
  display: flex;
  align-items: center;
  margin-left: 1.5rem;
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
.autographs p {
  font-size: 0.3rem;
}
</style>