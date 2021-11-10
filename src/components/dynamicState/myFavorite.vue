<template>
  <!-- 主页-->
  <div class="textScroll">
    <div
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="busy"
      infinite-scroll-distance="10"
    >
      <div>我的收藏</div>

      <div style="width: 10rem; margin: 0 auto; margin-top: 0.4rem">
        <el-tabs v-model="activeName" @tab-click="handleClick" stretch>
          <!-- 不看ta的动态 -->
          <el-tab-pane label="不看ta的动态" name="first">
            <div
              style="display: flex; align-items: center; margin-bottom: 0.5rem"
            >
              <div style="width: 10rem; display: flex; align-items: center">
                <!-- 头像 -->
                <div class="imgs">
                  <img
                    src="https://gitee.com/adya/images/raw/master/img/lALPDhYBRwiR4kFMbA_108_76.png"
                    alt=""
                  />
                </div>
                <!-- 个性签名 -->
                <div>
                  <p>旧时光里的猫</p>
                </div>
              </div>
              <div style="font-size: 0.5rem; margin-right: 0.2rem">
                <el-button type="primary" class="delete">移出</el-button>
              </div>
            </div>

            <div
              style="display: flex; align-items: center; margin-bottom: 0.5rem"
            >
              <div style="width: 10rem; display: flex; align-items: center">
                <!-- 头像 -->
                <div class="imgs">
                  <img
                    src="https://gitee.com/adya/images/raw/master/img/lALPDhYBRwiR4kFMbA_108_76.png"
                    alt=""
                  />
                </div>
                <!-- 个性签名 -->
                <div>
                  <p>旧时光里的猫</p>
                </div>
              </div>
              <div style="font-size: 0.5rem; margin-right: 0.2rem">
                <el-button type="primary" class="delete">移出</el-button>
              </div>
            </div>
          </el-tab-pane>
          <!-- 添加 -->
          <el-tab-pane label="添加" name="second">
            <div style="width: 5rem; margin: 0 auto; margin-bottom: 0.5rem">
              <el-input placeholder="请输入昵称" clearable>
                <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>
            </div>
            <div
              style="display: flex; align-items: center; margin-bottom: 0.5rem"
            >
              <div style="width: 10rem; display: flex; align-items: center">
                <!-- 头像 -->
                <div class="imgs">
                  <img
                    src="https://gitee.com/adya/images/raw/master/img/lALPDhYBRwiR4kFMbA_108_76.png"
                    alt=""
                  />
                </div>
                <!-- 个性签名 -->
                <div>
                  <p>旧时光里的猫</p>
                </div>
              </div>
              <div style="font-size: 0.5rem; margin-right: 0.2rem">
                <el-button type="primary" class="delete">添加</el-button>
              </div>
            </div>
            <div
              style="display: flex; align-items: center; margin-bottom: 0.5rem"
            >
              <div style="width: 10rem; display: flex; align-items: center">
                <!-- 头像 -->
                <div class="imgs">
                  <img
                    src="https://gitee.com/adya/images/raw/master/img/lALPDhYBRwiR4kFMbA_108_76.png"
                    alt=""
                  />
                </div>
                <!-- 个性签名 -->
                <div>
                  <p>旧时光里的猫</p>
                </div>
              </div>
              <div style="font-size: 0.5rem; margin-right: 0.2rem">
                <el-button type="primary" class="delete">添加</el-button>
              </div>
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
      count: [1, 2, 3],
      data: [],
      busy: false,
      countss: 0,
      jubaodialogVisible: false,
    };
  },
  methods: {
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
  background-color: rgba(240, 249, 255, 0.8);
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
</style>