<template>
  <div class="new">
    <div class="news" v-show="pushs">
      <p>分享新鲜事</p>
      <el-input type="textarea" :rows="2" v-model="form.news"> </el-input>
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
      <div class="biaoqian">
        <el-radio-group v-model="form.datalaong">
          <el-radio-button
            border
            label="日常"
            style="padding-right: 10px"
          ></el-radio-button>
          <el-radio-button
            border
            label="美食"
            style="padding-right: 10px"
          ></el-radio-button>
          <el-radio-button
            border
            label="情感"
            style="padding-right: 10px"
          ></el-radio-button>
          <el-radio-button border label="旅游"></el-radio-button>
        </el-radio-group>
      </div>
      <div class="btn">
        <el-button class="zleft" type="info">取消</el-button>
        <el-button class="lleft" type="primary" @click="push">发布</el-button>
      </div>
    </div>

    <!-- 主页 -->
    <div v-show="homes">
      <page />
    </div>
  </div>
</template>

<script>
// import page from "../homepage.vue";
import page from "../homepage/personData.vue";

export default {
  name: "upData",
  components: {
    page,
  },
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      homes: false,
      pushs: true,
      image: [],
      form: {
        picture: [],
        news: "",
        datalaong: "",
        goodfood: "",
        emo: "",
        tracffic: "",
      },
    };
  },
  methods: {
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
    // 确认发布按钮
    push() {
      // this.homes = true;
      this.pushs = false;
    },
  },
};
</script>

<style  scoped>
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
  font-size: 0.55rem;
  font-weight: 500;
  color: rgb(17, 16, 16);
}
.btn {
  margin-top: 1.3rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
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
</style>