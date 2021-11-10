<template>
  <div>
    <!-- 主页-->
    <div class="textScroll">
      <div
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="busy"
        infinite-scroll-distance="10"
      >
        <div v-show="wode">
          <!-- 头像、个性签名 -->
          <div>
            <!-- 头像 -->
            <div class="imgs">
              <img
                src="https://gitee.com/adya/images/raw/master/img/lALPDhYBRwiR4kFMbA_108_76.png"
                alt=""
              />
            </div>
            <!-- 个性签名 -->
            <div class="autograph">
              <div>
                <p>旧时光里的猫</p>
                <p>个性签名：这个人很懒，什么也没留下~</p>
              </div>
              <!-- 日期 -->
              <el-date-picker
                v-model="value1"
                type="date"
                placeholder="选择日期"
                class="data"
              >
              </el-date-picker>
            </div>
          </div>

          <!-- 类型选择按钮 -->
          <div class="anniu">
            <el-button class="zleft">全部</el-button>
            <el-button class="lleft">日常</el-button>
            <el-button class="lleft">美食</el-button>
            <el-button class="lleft">旅游</el-button>
            <el-button class="lleft">情感</el-button>
          </div>

          <!-- 动态内容 -->
          <el-card style="position: relative">
            <div>
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

              <!-- 标签、举报 -->
              <div
                style="
                  width: 100%;
                  display: flex;
                  justify-content: space-between;
                  margin-top: 9px;
                "
              >
                <el-tag>日常</el-tag>
                <div style="font-size: 0.6rem">
                  <i class="el-icon-delete" @click="shanchu"></i>
                </div>
              </div>
              <div style="margin-bottom: 0.2rem">
                <p>看我新画的水墨画！</p>
              </div>
              <div class="neirong">
                <img
                  src="https://gitee.com/adya/images/raw/master/img/lALPDh0cREnccB28_1903_937.png"
                  alt=""
                />
              </div>

              <!-- 消息提示 -->
              <div class="tips">
                <el-badge :value="2">
                  <i class="el-icon-chat-dot-square"></i>
                </el-badge>
                <i class="iconfont icon-shoucang ass assd"></i>
                <i class="iconfont icon-icon ass"></i>
              </div>
              <el-divider></el-divider>

              <!-- 评论 -->
              <div>
                <div class="headered">
                  <!-- 头像 -->
                  <div class="imgs">
                    <img
                      src="https://gitee.com/adya/images/raw/master/img/lALPDhYBRwiR4kFMbA_108_76.png"
                      alt=""
                    />
                  </div>
                  <div class="text">
                    <p>ZZ:你真棒！</p>
                    <p class="text_bottom">2021年8月12日 16:25</p>
                  </div>
                  <div style="font-size: 0.5rem; margin-right: 0.2rem">
                    <i class="el-icon-delete delete" @click="shanping"></i>
                  </div>
                </div>

                <div class="headered">
                  <!-- 头像 -->
                  <div class="imgs">
                    <img
                      src="https://gitee.com/adya/images/raw/master/img/lALPDhYBRwiR4kFMbA_108_76.png"
                      alt=""
                    />
                  </div>
                  <div class="text">
                    <p>ZZ:你真棒！</p>
                    <p class="text_bottom">2021年8月12日 16:25</p>
                  </div>
                  <div style="font-size: 0.5rem; margin-right: 0.2rem">
                    <i class="el-icon-delete delete" @click="shanping"></i>
                  </div>
                </div>
              </div>

              <!-- 发表评论 -->
              <div
                style="
                  width: 10rem;
                  margin: 0px auto;
                  margin-top: 0.5rem;
                  display: flex;
                "
              >
                <el-input placeholder="请输入评论...." clearable> </el-input>
                <el-button
                  icon="el-icon-s-promotion"
                  style="width: 1rem"
                ></el-button>
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </el-card>
        </div>

        <!-- 收藏 -->
        <div v-show="favorite">
          <el-card>
            <div class="cont" :data="form" v-for="item in form" :key="item.id">
              <div class="content">
                <div class="picture">
                  <img :src="item.user_image" alt="" />
                </div>
                <!-- 个性签名 -->
                <div style="font-size: 0.3rem">
                  <div style="float: left">{{ item.user_nickname }}:</div>
                  <div class="textarea">{{ item.dynamics_content }}</div>
                </div>
              </div>
              <template>
                <div class="move_btn">
                  <el-button type="primary" class="delete">取消收藏</el-button>
                </div>
              </template>
            </div>
          </el-card>
        </div>
      </div>
    </div>

    <!-- 我的收藏按钮 -->
    <div class="www" v-show="favorite_btn">
      <i class="el-icon-star-on" @click="turn" style="padding-top: 0.1rem"></i>
      <p>我的收藏</p>
    </div>

    <!-- 我的返回按钮 -->
    <div v-show="fanhui">
      <i class="el-icon-back" @click="back"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "Homepage",
  data() {
    return {
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
      },
      radio: [],
      value1: "",
      count: [1, 2, 3],
      data: [],
      busy: false,
      countss: 0,
      flag: 0,
      wode: true,
      favorite: false,
      favorite_btn: true,
      fanhui: false,
      form: [
        {
          id: "1",
          user_image:
            "https://gitee.com/adya/images/raw/master/img/lALPDgQ9zchxJh3NA6nNB28_1903_937.png",
          user_nickname: "嘎嘎嘎",
          dynamics_content: "杨佳欣",
        },
        {
          id: "2",
          user_image:
            "https://gitee.com/adya/images/raw/master/img/lALPDgQ9zchxJh3NA6nNB28_1903_937.png",
          user_nickname: "嘎嘎嘎",
          dynamics_content: "杨佳欣",
        },
        {
          id: "3",
          user_image:
            "https://gitee.com/adya/images/raw/master/img/lALPDgQ9zchxJh3NA6nNB28_1903_937.png",
          user_nickname: "嘎嘎嘎",
          dynamics_content: "杨佳欣",
        },
      ],
    };
  },
  methods: {
    load() {
      this.count += 2;
    },
    loadMore: function () {
      this.busy = true;
      setTimeout(() => {
        for (var i = 0, j = 10; i < j; i++) {
          this.data.push({ name: this.count++ });
        }
        // console.log(this.data);
        this.busy = false;
      }, 1000);
    },

    // 删除评论
    async shanping() {
      const ConfirmResult = await this.$confirm(
        "此操作将永久删除该评论, 是否继续?",
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }
      ).catch((err) => err);
      if (ConfirmResult !== "confirm") {
        return this.$message.info("已取消删除该评论");
      }
      this.$message.success("删除评论成功！");
    },
    // 删除动态
    async shanchu() {
      const ConfirmResult = await this.$confirm(
        "此操作将永久删除该动态, 是否继续?",
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }
      ).catch((err) => err);
      if (ConfirmResult !== "confirm") {
        return this.$message.info("已取消删除该动态");
      }
      this.$message.success("删除动态成功！");
    },
    turn() {
      console.log(1);
      if (this.flag == 0) {
        this.wode = false;
        this.favorite = true;
        this.favorite_btn = false;
        this.fanhui = true;
        this.flag = 1;
      }
    },
    back() {
      if (this.flag == 1) {
        this.wode = true;
        this.favorite = false;
        this.favorite_btn = true;
        this.fanhui = false;
        this.flag = 0;
      }
    },
  },
};
</script>

<style scoped>
body,
html {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
.header {
  width: 100%;
  height: 2rem;
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
  z-index: 1;
  background-color: rgba(240, 249, 255, 0.5);
}
.textScroll::-webkit-scrollbar {
  display: none;
}
P {
  font-size: 0.4rem;
  color: #000;
}
.data {
  width: 2rem;
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
  display: flex;
  justify-content: space-around;
  margin-top: 0.15rem;
}
.lleft {
  margin-left: 0.45rem;
  width: 1.6rem;
  height: 0.8rem;
}
.zleft {
  margin-left: 0.6rem;
  width: 1.6rem;
  height: 0.8rem;
}
.el-card {
  width: 11rem;
  margin: 0 auto;
  margin-top: 0.4rem;
}
.neirong {
  width: 100%;
  height: 5.5rem;
  margin: 0 auto;
}
.neirong img {
  width: 100%;
  height: 100%;
}
.ass {
  float: right;
  margin-top: 0.5rem;
}
.assd {
  margin-left: 0.3rem;
}
.text p {
  font-size: 0.25rem;
}
.text_bottom {
  margin-top: 0.8rem;
}
.delete {
  width: 0.05rem;
  height: 0.05rem;
  float: right;
  margin-right: 15px;
}
.autographs p {
  font-size: 0.3rem;
}
.headered {
  display: flex;
  align-items: center;
}
.text {
  width: 8rem;
}
.ww {
  position: absolute;
  top: 0px;
  right: 0;
}
.picture {
  width: 1.5rem;
  height: 1.5rem;
}
.picture img {
  width: 100%;
  height: 100%;
}
.textarea {
  float: left;
  width: 5rem;
  word-break: break-all;
  word-wrap: break-word;
}
.cont {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}
.content {
  width: 10rem;
  display: flex;
  align-items: center;
}
.move_btn {
  font-size: 0.5rem;
  margin-right: 0.2rem;
}
.data[data-v-17568408] {
  width: 4rem;
}
.www {
  margin-left: 14.2rem;
  margin-top: 2rem;
}
.www p {
  font-size: 0.2rem;
}
.anniu {
  margin-top: 0.5rem;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>