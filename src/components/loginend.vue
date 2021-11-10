<template>
  <div class="login_container">
    <div class="outer">
    </div>
    <div class="login_box" v-loading="loading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)">
      <!-- 钉钉二维码 -->
    </div>
  </div>
</template>

<script>


export default {
  data(){
    return{
            loading: true,
     
    }
  },
  created(){
      this.login()
  },
  methods: {

 async login(){
      let code=this.$route.query.code
      let state=this.$route.query.state
      console.log(code,state);
      const {data:res}=await this.$http.get(
        "/api/user/login?code="+code+"&state="+state,
      )
      console.log(res);
      if(res.code==200){
          console.log(res.data);
          if(res.data.isfirst==1)
          this.$router.push('/loginPersonData')
           else{
          this.$router.push('/HelloWord')
      }
      }
     
  }
},

// async tt(){
//   const {data:res}=await this.$http.post(
//         "/api/user/login",
//         {
//           code: loginTmpCode,
//           state: STATE,
//         }
//       );
// }
}
</script>

<style scoped>
.outer {
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
.btn_login{
  text-align: center;
}
body,
html {
  width: 100%;
  height: 100%;
}
.login_box {
  width: 100%;
  height: 100%;
  /* background-color: black; */
  border-radius: 3px;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>