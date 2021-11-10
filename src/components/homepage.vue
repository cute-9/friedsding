<template>
  <div>
    <!-- 主页-->
    <div class="textScroll">
      <div
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="busy"
        infinite-scroll-distance="10"
      >
        <!-- 自己主页 -->
        <div v-show="myhome">
          <!-- 头像、个性签名 -->
          <a name="top"></a>
          <div :model="self_home">
            <div class="introduce">
              <!-- 头像 -->
              <div class="imgs">
                <img :src="self_home.imgs" />
              </div>
              <!-- 个性签名 -->
              <div class="autograph">
                <div>
                  <p>{{ self_home.nickname }}</p>
                  <p>个性签名：{{ self_home.person_signature }}</p>
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
          </div>

          <!-- 动态内容 -->
          <el-card>
            <div>
              <!-- 头像、个性签名、时间 -->
              <div class="headered">
                <!-- 头像 -->
                <div class="imgs">
                  <img
                    src="https://gitee.com/adya/images/raw/master/img/lALPDhYBRwiR4kFMbA_108_76.png"
                    alt=""
                    @click="otherhome"
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
                  <i class="el-icon-warning-outline" @click="jubao"></i>
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
              <div>
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
            </div>

            <div style="margin-top: 0.9rem">
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
              <div>
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
            </div>
          </el-card>
        </div>

        <!-- 他人主页 -->
        <div v-show="otherhomes">
          <!-- 头像、个性签名 -->
          <div class="introduce">
            <!-- 头像 -->
            <div class="imgs">
              <img
                src="https://gitee.com/adya/images/raw/master/img/lALPDhYBRwiR4kFMbA_108_76.png"
                alt=""
                @click="other_information"
              />
            </div>
            <!-- 个性签名 -->
            <div class="autograph">
              <div>
                <p>一只茶杯猫emo</p>
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
          <div>
            <el-button class="zleft">全部</el-button>
            <el-button class="lleft">日常</el-button>
            <el-button class="lleft">美食</el-button>
            <el-button class="lleft">旅游</el-button>
            <el-button class="lleft">情感</el-button>
          </div>

          <!-- 动态内容 -->
          <el-card style="position: relative">
            <!-- 返回我的主页 -->
            <!-- <div class="back_home">
              <i
                class="el-icon-house"
                style="margin-left: 0.8rem"
                @click="back_myhome"
              ></i>
              <p>返回我的主页</p>
            </div> -->
            <div>
              <div style="margin-bottom: 0.5rem">
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
                    <i class="el-icon-warning-outline" @click="jubao"></i>
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
              <div style="margin-bottom: 0.5rem">
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
                    <i class="el-icon-warning-outline" @click="jubao"></i>
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
            </div>
          </el-card>
        </div>

        <!-- 发布页面 -->
        <div v-show="publish" style="margin-top: 0.8rem">
          <div class="new">
            <div class="news">
              <p>分享新鲜事</p>
              <el-input type="textarea" :rows="2" v-model="form.news">
              </el-input>
              <p>上传视频/图片（最多9张）</p>
              <el-upload
                v-model="form.picture"
                action="http://art.aztop.cn/api/uppic/uppic"
                list-type="picture-card"
                :on-preview="handlePictureCardPreview"
                :on-remove="handleRemove"
                :on-success="picSuccess1"
              >
                <i class="el-icon-plus"></i>
              </el-upload>
              <div class="anniu">
                <el-button class="lleft">日常</el-button>
                <el-button class="lleft">美食</el-button>
                <el-button class="lleft">旅游</el-button>
                <el-button class="lleft">情感</el-button>
              </div>
              <div class="btn">
                <el-button type="info" class="zleft" @click="push"
                  >取消</el-button
                >
                <el-button type="primary" class="lleft" @click="push"
                  >发布</el-button
                >
              </div>
            </div>
          </div>
          <!-- <upData /> -->
        </div>

        <!-- 他人个人资料 -->
        <div v-show="otherInfos">
          <otherinfo />
        </div>

        <!-- 举报弹窗 -->
        <el-dialog
          title="举报"
          :visible.sync="jubaodialogVisible"
          width="13rem"
          center
        >
          <p class="explains">您为什么要举报此信息？</p>
          <el-checkbox-group v-model="radio">
            <el-checkbox label="色情低俗"></el-checkbox>
            <el-checkbox label="政治敏感"></el-checkbox>
            <el-checkbox label="违法"></el-checkbox>
            <el-checkbox label="广告"></el-checkbox>
            <el-checkbox label="病毒木马"></el-checkbox>
            <el-checkbox label="侵犯未成年人权益"></el-checkbox>
          </el-checkbox-group>
          <p class="explain">举报说明</p>
          <el-input
            type="textarea"
            :rows="4"
            placeholder="描述恶意行为"
          ></el-input>
          <span slot="footer" class="dialog-footer">
            <el-button @click="jubaodialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="submit">确 定</el-button>
          </span>
        </el-dialog>
      </div>
    </div>

    <div class="www" v-show="gotop">
      <a href="#top"> <i class="el-icon-top"></i> </a>
    </div>

    <div class="sss" v-show="aww">
      <i
        class="el-icon-circle-plus-outline"
        @click="publishs"
        style="font-size: 0.7rem"
      ></i>
    </div>

    <!-- 返回我的主页 -->
    <div class="ssa" v-show="others">
      <i
        class="el-icon-house"
        style="margin-left: 0.8rem"
        @click="back_myhome"
        v-show="others"
      ></i>
    </div>

    <!-- 返回按钮 -->
    <div v-show="backs" @click="back">
      <i class="el-icon-back"></i>
    </div>
  </div>
</template>

<script>
// import upData from "./homepage/upDate.vue";
import otherinfo from "../components/other/otherInformation.vue";
export default {
  name: "Homepage",
  components: {
    otherinfo,
  },
  data() {
    return {
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
      },
      // updata:true,
      radio: [],
      value1: "",
      count: [1, 2, 3],
      data: [],
      busy: false,
      countss: 0,
      jubaodialogVisible: false,
      otherhomes: false,
      myhome: true,
      publish: false,
      gotop: true,
      aww: true,
      others: false,
      otherInfos: false,
      backs: false,
      home: 0,
      dialogImageUrl: "",
      dialogVisible: false,
      image: [],
      form: {
        picture: [],
        news: "",
        datalaong: "",
        goodfood: "",
        emo: "",
        tracffic: "",
      },
      self_home: {
        imgs: "https://gitee.com/adya/images/raw/master/img/lALPDhYBRwiR4kFMbA_108_76.png",
        nickname: "旧时光里的猫",
        person_signature: "这个人很懒，什么也没留下~",
      },
    };
  },
  watch: {
    "form.picture": function () {
      if (this.form.picture.length > 9) {
        //  this.updata=!this.updata
      }
    },
  },
  created() {
    this.getList();
  },
  methods: {
    async getList() {
      var user_id = "orieufjdsdslsfdm";
      const { data: res } = await this.$http.get(
        "/api/dynamic/whole_type?user_id=" + user_id
      );
      console.log(res);
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
    handleRemove(fileList) {
      let p = fileList.response.data;
      for (let i = 0; i < this.form.picture.length; i++) {
        if (this.form.picture[i] == p) {
          this.form.picture.splice(this.form.picture[i], i);
        }
      }
      // console.log(this.form.picture);
    },
    handlePictureCardPreview(res, file) {
      //  console.log(this.res);
      this.dialogImageUrl = res.data;
      this.dialogVisible = true;
    },
    picSuccess1(res, file) {
      if (res.code == 200) {
        this.form.picture.push(res.data);

        console.log(this.form.picture);
      } else {
        this.$message.error("图片上传失败，请重新上传!!");
      }
    },
    // 举报弹窗
    jubao() {
      this.jubaodialogVisible = true;
    },
    // 确定提交
    async submit() {
      this.jubaodialogVisible = false;
      const ConfirmResult = await this.$confirm(
        "此操作将提交该举报, 是否继续?",
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }
      ).catch((err) => err);
      if (ConfirmResult !== "confirm") {
        return this.$message.info("已取消提交该举报");
      }
      this.$message.success("提交举报成功！");
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
    // 跳转他人主页
    otherhome() {
      this.myhome = false;
      this.otherhomes = true;
      this.gotop = false;
      this.aww = false;
      this.others = true;
    },
    // 返回我的主页
    back_myhome() {
      this.myhome = true;
      this.otherhomes = false;
      this.gotop = true;
      this.aww = true;
      this.others = false;
    },
    // 发布
    publishs() {
      // console.log(132);
      this.myhome = false;
      this.publish = true;
      this.gotop = false;
      this.aww = false;
    },
    // 确认发布按钮
    push() {
      this.myhome = true;
      this.publish = false;
      this.gotop = true;
      this.aww = true;
    },
    // 跳转他人个人资料
    other_information() {
      console.log(258);
      this.otherhomes = false;
      this.gotop = false;
      this.aww = false;
      this.otherInfos = true;
      this.others = false;
      this.backs = true;
    },
    back() {
      this.backs = false;
      this.otherInfos = false;
      this.others = true;
      this.otherhomes = true;
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
.anniu {
  margin-top: 0.5rem;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
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
  margin-left: 1.5rem !important;
}
.autograph p {
  font-size: 0.4rem !important;
}
.lleft {
  width: 1.6rem;
  height: 0.8rem;
}
.zleft {
  width: 1.6rem;
  height: 0.8rem;
  /* margin-left: 0.6rem; */
}
.el-card {
  width: 12rem;
  margin: 0 auto;
  margin-top: 0.4rem;
}
.add {
  margin-top: -0.1rem;
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
.imges {
  float: left;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
}
.imges img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
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
  font-size: 0.25rem !important;
}
.headered {
  display: flex;
  align-items: center;
}
.text {
  width: 8rem;
}
.explains {
  margin-top: 0.2rem !important;
  margin-bottom: 0.2rem !important;
  font-size: 0.6rem !important;
}
.explain {
  margin-top: 0.2rem !important;
  margin-bottom: 0.2rem !important;
  font-size: 0.6rem !important;
}
/* .back_home {
  position: absolute;
  right: 0;
  top: 0;
} */
.el-input {
  position: relative;
  font-size: 0.3rem;
  display: inline-block;
  width: 100%;
}
.www {
  margin-left: 14rem;
  margin-top: 2rem;
}
.ssa {
  margin-left: 13.3rem;
  margin-top: 8rem;
}
.sss {
  margin-left: 14.2rem;
  margin-top: 8rem;
}
.new {
  height: 100%;
  background-color: rgba(233, 233, 233, 0.2);
  opacity: 0.8;
  display: flex;
  justify-content: center;
  align-items: center;
}
.news {
  width: 80%;
}
.biaoqian {
  margin-top: 0.3rem;
}
.news p {
  font-size: 0.5.5rem;
  font-weight: 500;
  color: rgb(17, 16, 16);
}
.btn {
  margin-top: 1.3rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.el-radio-button {
  position: relative;
  display: inline-block;
  outline: 0;
  width: 2rem;
  height: 1rem;
}
.lleft {
  width: 1.6rem;
  height: 0.8rem;
}
.zleft {
  width: 1.6rem;
  height: 0.8rem;
  /* margin-left: 0.6rem; */
}
.el-message-box {
  width: 12rem !important;
}
</style>