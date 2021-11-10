<template>
  <div class="textScroll">
    <div
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="busy"
      infinite-scroll-distance="10"
    >
      <el-card class="cc">
        <!-- <div class="avatar_box">
          <img
            src="https://gitee.com/adya/images/raw/master/img/消息空图片(1).png"
          />
          
        </div> -->
        <div class="introduce">
          <!-- 头像 -->
          <div class="hearder_imgs">
            <img
              src="https://gitee.com/adya/images/raw/master/img/消息空图片(1).png"
              alt=""
            />
          </div>
          <!-- 个性签名 -->
          <div class="autograph">
            <div>
              <p>retyerwyred</p>
              <p @click="shezhisIgnature">点击设置个性签名</p>
            </div>
          </div>
        </div>
        <!-- <div class="xx"> -->
        <!-- <p>个性签名：这个人很懒，什么也没留下~</p> -->
        <!-- </div> -->
        <div class="zz">
          <div class="mm"><p>背景</p></div>
          <!-- 上传背景图片 -->
          <div class="imgs">
            <div v-for="(item, index) in list" :key="index" class="kk">
              <div class="iamges">
                <img :src="item" />
                <div class="ss">
                  <el-button>应用</el-button>
                </div>
              </div>
            </div>
            <!-- <div class="ss">
            <el-button style="height: 2px; line-height: 1px; margin-bottom: 5px"
              >应用</el-button
            >
          </div> -->
          </div>
          <!-- 上传背景图片按钮 -->
          <div class="ee">
            <el-upload
              class="upload-demo"
              drag
              action="http://art.aztop.cn/api/uppic/uppic"
              :on-success="sucess"
              multiple
            >
              <div class="gg"><i class="el-icon-upload"></i></div>

              <!-- <div class="el-upload__text">
              将文件拖到此处，或<em>点击上传</em>
            </div> -->
            </el-upload>
          </div>
          <!-- <div class="kk" @click="updata">
          <img
            src="https://gitee.com/zj095/cloudimg/raw/master/202111061708258.jpeg"
          />
        </div> -->
          <!-- <div class="ss">
          <el-button style="height: 2px; line-height: 1px; margin-bottom: 5px"
            >应用</el-button
          >
        </div> -->
          <div class="mm"><p>浮漂</p></div>
          <div class="imgs">
            <div v-for="(item, index) in fupiao" :key="index" class="kk">
              <div class="iamges">
                <img :src="item" />
                <div class="ss">
                  <el-button>应用</el-button>
                </div>
              </div>
            </div>
            <!-- <div class="ss">
            <el-button style="height: 2px; line-height: 1px; margin-bottom: 5px"
              >应用</el-button
            >
          </div> -->
          </div>
        </div>
      </el-card>
      <el-dialog
        title="个性签名"
        :visible.sync="IgnaturedialogVisible"
        class="InfoEdit"
      >
        <el-input type="textarea"></el-input>
        <div slot="footer" style="text-align: center">
          <el-button class="quxiaoEdit" type="info" @click="quxiaoIgnature"
            >取 消</el-button
          >
          <el-button class="quxiaoEdit" type="info" @click="sureIgnature"
            >保 存</el-button
          >
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      IgnaturedialogVisible: false,
      count: 0,
      data: [],
      busy: false,
      list: [
        "https://gitee.com/adya/images/raw/master/img/消息空图片(1).png",
        "https://gitee.com/adya/images/raw/master/img/消息空图片(1).png",
        "https://gitee.com/adya/images/raw/master/img/消息空图片(1).png",
        "https://gitee.com/adya/images/raw/master/img/消息空图片(1).png",
      ],
      fupiao: [
        "https://gitee.com/adya/images/raw/master/img/消息空图片(1).png",
        "https://gitee.com/adya/images/raw/master/img/消息空图片(1).png",
        "https://gitee.com/adya/images/raw/master/img/消息空图片(1).png",
        "https://gitee.com/adya/images/raw/master/img/消息空图片(1).png",
      ],
    };
  },
  methods: {
    sucess(res) {
      console.log(res);
      this.list.push(res.data);
    },
    loadMore: function () {
      this.busy = true;
      setTimeout(() => {
        for (var i = 0, j = 10; i < j; i++) {
          this.data.push({ name: this.count++ });
        }
        // console.log(this.data)
        this.busy = false;
      }, 1000);
    },
    // 设置个性签名弹窗
    shezhisIgnature() {
      console.log(123);
      this.IgnaturedialogVisible = true;
    },
    // 取消更改用户信息
    quxiaoIgnature() {
      this.IgnaturedialogVisible = false;
      this.$message("取消设置个性签名！");
    },
    // 更改用户
    sureIgnature() {
      this.IgnaturedialogVisible = false;
      this.$message.success("设置个性签名成功！");
    },
  },
};
</script>

<style >
body,
html {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
.textScroll {
  display: inline-block;
  position: fixed;
  top: 2rem;
  bottom: 0;
  left: 0;
  margin: auto;
  overflow: scroll;
  right: 0;
  width: 13rem;
  /* height: 10rem; */
  /* margin-bottom: 4.7rem; */
  z-index: 1;
  /* background-color: rgba(240, 249, 255, 0.8); */
  /* background-color: rgba(240, 249, 255, 0.5); */
}
.textScroll::-webkit-scrollbar {
  display: none;
}
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
  font-size: 0.5rem;
  color: rgb(79, 105, 177);
  /* margin-left: 0.2rem !important; */
  /* float: left; */
  /* vertical-align: middle; */
}
.xx p {
  font-size: 15px !important;
  margin-left: 0.2rem !important;
  float: left;
  vertical-align: middle;
  margin-top: 6px !important;
}
.zz {
  margin-top: 0.8rem !important;
  /* text-align: center; */
  margin: 0 auto;
  /* background-color: #d6e5ea; */
  /* height: 380px; */
}
.zz p {
  font-size: 0.4rem;
  font-weight: 10px;
  color: rgb(79, 105, 177);
  /* margin-left: 10px; */
}
.cc {
  background-color: rgba(240, 249, 255, 0.5);
}
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
/* .pp { */
/* width: 10rem !important; */
/* background-color: #162d4f !important; */
/* margin-bottom: 4px !important; */
/* margin-top: 4px !important; */
/* } */
.mm {
  margin-left: 0.2rem;
  margin-top: 0.2rem !important;
}

.kk img {
  width: 1.5rem;
  height: 1.3rem;
  /* margin-left: 20px; */
  text-align: center;
}
.iamges {
  margin-left: 0.5rem;
}
.kk el-button {
  width: 1.5rem;
}
.imgs {
  display: flex;
  flex-wrap: wrap;
}
/* .ss el-button {
  width: 1rem; 
  line-height: 1px;
  margin-left: 0.4rem !important;
   margin-bottom: 5px;
} */
.el-upload-dragger {
  width: 1.5rem;
  height: 1.3rem;
  margin-left: 0.3rem;
}
.el-icon-upload {
  line-height: 0.3rem;
}
/* .gg {
  font-size: 38px !important;
} */
.el-upload-dragger .el-icon-upload {
  font-size: 38px !important;
  color: #c0c4cc;
  /* margin: 1rem 0 16 px; */
  line-height: 0;
}
.ss {
  /* height: 26.8px; */
  /* margin-top: -30px !important; */
  /* margin-top: -0.5rem !important;
  margin-left: 0.4rem !important; */
  text-align: center;
  /* background-color: tomato; */
}

.ss .el-button {
  padding: 0.15rem !important;
}
.quxiaoEdit {
  width: 1.5rem;
  height: 0.5rem;
}
.InfoEdit {
  width: 15rem;
  margin: 0 auto;
}
.autograph P {
  font-size: 0.4rem;
  color: #000;
}
.hearder_imgs {
  float: left;
  width: 1.3rem;
  height: 1.3rem;
  border-radius: 50%;
}
.hearder_imgs img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.autograph {
  margin-left: 1.7rem;
  /* display: flex;
  justify-content: space-around; */
  margin-top: 0.15rem;
}
</style>