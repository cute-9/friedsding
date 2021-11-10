<template>
  <!-- 主页-->
  <div class="textScroll">
    <div
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="busy"
      infinite-scroll-distance="10"
    >
      <!-- 头像、个性签名 -->
      <div style="display: flex; align-items: center">
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
        </div>
      </div>

      <div class="arr">
        <el-tabs v-model="activeName" @tab-click="handleClick" stretch>
          <!-- 不看ta的动态 -->
          <el-tab-pane label="不看ta的动态" name="first">
            <div
              class="arrs"
              :data="forms"
              v-for="item in forms"
              :key="item.user_id"
            >
              <div class="aqq">
                <!-- 头像 -->
                <div class="imgs">
                  <img :src="item.user_image" alt="" />
                </div>
                <!-- 个性签名 -->
                <div>
                  <p>{{ item.user_nickname }}</p>
                </div>
              </div>
              <template slot-scope="scope">
                <div class="qww">
                  <el-button
                    type="primary"
                    class="delete"
                    @click="remove(scope.row)"
                    >移出</el-button
                  >
                </div>
              </template>
            </div>
          </el-tab-pane>

          <!-- 添加 -->
          <el-tab-pane label="添加" name="second">
            <div class="wee">
              <el-input
                placeholder="请输入昵称"
                clearable
                v-model="name"
                @clear="getBaiList"
              >
              </el-input>
              <el-button
                icon="el-icon-search"
                class="adad"
                @click="sousuo"
              ></el-button>
            </div>

            <div
              class="wrr"
              :data="users"
              v-for="item in users"
              :key="item.user_id"
            >
              <div class="wff">
                <!-- 头像 -->
                <div class="imgs">
                  <img :src="item.user_image" alt="" />
                </div>
                <!-- 个性签名 -->
                <div>
                  <p>{{ item.user_nickname }}</p>
                </div>
              </div>
              <template>
                <div class="wtt">
                  <el-button type="primary" class="delete">添加</el-button>
                </div>
              </template>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
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
      activeName: "first",
      radio: [],
      value1: "",
      name: "",
      count: [1, 2, 3],
      data: [],
      busy: false,
      countss: 0,
      jubaodialogVisible: false,
      // 不看ta的动态
      forms: [
        // {
        //   user_id: "3",
        //   user_image:
        //     "https://gitee.com/adya/images/raw/master/img/lALPDhYBRwiR4kFMbA_108_76.png",
        //   user_nickname: "旧时光里的猫",
        // },
        // {
        //   user_id: "4",
        //   user_image:
        //     "https://gitee.com/adya/images/raw/master/img/lALPDhYBRwiR4kFMbA_108_76.png",
        //   user_nickname: "小花000",
        // },
      ],
      // 所有用户  添加
      users: [
        // {
        //   user_id: "6",
        //   user_image:
        //     "https://gitee.com/adya/images/raw/master/img/lALPDhYBRwiR4kFMbA_108_76.png",
        //   user_nickname: "旧时光里的猫",
        // },
        // {
        //   user_id: "5",
        //   user_image:
        //     "https://gitee.com/adya/images/raw/master/img/lALPDhYBRwiR4kFMbA_108_76.png",
        //   user_nickname: "小花000",
        // },
      ],
    };
  },
  created() {
    this.getList();
    this.getBaiList();
  },
  methods: {
    async getList() {
      var user_id = "orieufjdsdslsfdm";
      const { data: res } = await this.$http.post(
        "/api/black/showAllBlackUser?userId=" + user_id
      );
      // console.log(res);
      this.forms = res.data;
    },
    async getBaiList() {
      var user_id = "orieufjdsdslsfdm";
      const { data: res } = await this.$http.post(
        "/api/black/showAllWhiteUser?userId=" + user_id
      );
      // console.log(res);
      this.users = res.data;
    },
    // 搜索
    async sousuo() {
      var user_id = "orieufjdsdslsfdm";
      const { data: res } = await this.$http.post(
        "/api/black/showAllWhiteUser",
        {
          userId: user_id,
          nickName: this.name,
        }
      );
      this.users = res.data;
    },
    // 移出黑名单
    remove(info) {
      console.log(info);
      console.log(789);
      var user_id = "orieufjdsdslsfdm";
      //  const{data:res} = await this.$http.post('/api/black/deleteBlackList',{
      //    userIds:,
      //    userId:user_id
      //  })
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
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
  /* float: left; */
  display: flex;
  justify-content: space-between;
  margin-top: 0.15rem;
}
.delete {
  width: 0.05rem;
  height: 0.05rem;
  float: right;
  margin-right: 15px;
}
.adad {
  width: 1rem !important;
  height: 1rem !important;
  padding: 12px;
}
.el-input {
  position: relative;
  font-size: 0.3rem;
  display: inline-block;
  width: 100%;
  height: 1rem;
}
.el-input__inner {
  height: 1rem !important;
}
.arr {
  width: 10rem;
  margin: 0 auto;
  margin-top: 0.4rem;
}
.arrs {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}
.aqq {
  width: 10rem;
  display: flex;
  align-items: center;
}
.qww {
  font-size: 0.5rem;
  margin-right: 0.2rem;
}
.wee {
  width: 5rem;
  margin: 0 auto;
  margin-bottom: 0.5rem;
  width: 5rem;
  margin: 0px auto 0.5rem;
  display: flex;
}
.wrr {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}
.wff {
  width: 10rem;
  display: flex;
  align-items: center;
}
.wtt {
  font-size: 0.5rem;
  margin-right: 0.2rem;
}
</style>