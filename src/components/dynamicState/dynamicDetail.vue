<template>
  <div>
    <div class="all" :model="form">
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
      <div class="akk">
        <el-tag>日常</el-tag>
        <div class="add">
          <i class="el-icon-warning-outline" @click="jubao"></i>
        </div>
      </div>

      <div class="aff">
        <p class="amm">看我新画的水墨画！</p>
      </div>
      <div class="neirongs">
        <img
          src="https://gitee.com/adya/images/raw/master/img/lALPDh0cREnccB28_1903_937.png"
          alt=""
        />
      </div>

      <!-- 消息提示 -->
      <div class="infos">
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
            <i class="el-icon-delete delete"></i>
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
      <div class="cnn">
        <el-input placeholder="请输入评论...." clearable> </el-input>
        <el-button icon="el-icon-s-promotion" style="width: 1rem"></el-button>
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
      <br />
      <br />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: [],
      jubaodialogVisible: false,
      form: {
        dynamics_content: "这是我的记录", //动态内容
        created_at: "2021-11-07 16:52:49", //发表动态时间
        user_nickname: "小花", //发动态人昵称
        user_sign: "", //个性签名
        user_image:"",   //头像
        dlabel_id:"", //标签
        url_name:"", //动态图片
        
      },
    };
  },
  methods: {
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
  },
};
</script>

<style scoped>
.all {
  /* background: chocolate; */
  width: 90%;
  margin: 0 auto;
  margin-top: 0.4rem;
}
.headered {
  /* height: 1.5rem; */
  /* background-color: chocolate; */
  display: flex;
  align-items: center;
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
.neirongs {
  width: 80%;
  height: 5.5rem;
  margin: 0 auto;
}
.neirongs img {
  width: 100%;
  height: 100%;
}
.text {
  width: 8rem;
}
.text p {
  font-size: 0.25rem;
}
.text_bottom {
  margin-top: 0.8rem;
}
.ass {
  float: right;
  margin-top: 0.5rem;
}
.assd {
  margin-left: 0.3rem;
}
.delete {
  width: 0.05rem;
  height: 0.05rem;
  float: right;
  margin-right: 15px;
}
.akk {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 9px;
}
.add {
  font-size: 0.6rem;
}
.aff {
  margin-bottom: 0.2rem;
}
.amm {
  font-size: 0.4rem;
}
.cnn {
  width: 10rem;
  margin: 0px auto;
  margin-top: 0.5rem;
  display: flex;
}
</style>