<template>
  <div class="textScroll">
    <el-card class="cc">
      <div class="avatar_box">
        <img
          src="https://gitee.com/adya/images/raw/master/img/消息空图片(1).png"
        />
      </div>
      <div class="avatar_text">
        <p>一只茶杯猫emo</p>
      </div>
      <div class="avatar_text">
        <p>个性签名：这个人很懒，什么也没留下~</p>
      </div>
      <div class="bb">
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
        <div class="submit">
          <el-button @click="changeInfo" class="pp" type="info" style=""
            >更改</el-button
          >
        </div>
      </div>
    </el-card>
    <el-dialog :visible.sync="changeInfoVisible" class="InfoEdit">
      <div class="sureEdit">是否确定修改？</div>
      <div slot="footer" style="text-align:center">
        <el-button class="quxiaoEdit" type="info" @click="quxiaoEditInfo" >取 消</el-button>
        <el-button class="quxiaoEdit" type="info" @click="sureEditInfo"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return { changeInfoVisible: false };
  },
  methods: {
    changeInfo() {
      console.log(123);
      this.changeInfoVisible = true;
    },
    // 取消更改用户信息
    quxiaoEditInfo(){
      this.changeInfoVisible=false;
      this.$message("取消信息更改！")
    },
    // 更改用户
    sureEditInfo(){
      this.changeInfoVisible=false;
      this.$message.success("更改信息成功！")
    }
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
  font-size: 0.5rem !important;
  margin-left: 10px !important;
  /* float: left; */
  vertical-align: middle;
}
.aa p {
  font-size: 15px !important;
  margin-left: 10px !important;
  float: left;
  vertical-align: middle;
  margin-top: 6px !important;
}
.bb {
  margin-top: -0.6rem !important;
  /* text-align: center; */
  margin: 0 auto;
  /* background-color: white; */
}
.cc {
  background-color: rgba(240, 249, 255, 0.5);
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
  margin-bottom: 0.2rem;
}
.dd {
  margin-top: 1rem !important;
}
.pp {
  /* width: 120px !important; */
  width: 2rem;
  height: 1rem;
  /* background-color: #162d4f !important; */
  margin-bottom: 4px !important;
  /* margin-top: 4px !important; */
}
.sureEdit {
  text-align: center;
}
.sureEdit {
  font-size: 19px;
  text-align: center;
  margin-top: 40px;
}
.quxiaoEdit{
  width: 1.5rem;
  height: 0.5rem;
}
.InfoEdit{
  width: 15rem;
  margin: 0 auto;
}
</style>