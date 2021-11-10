<template>
  <div class="login_container">
    <div class="outer">
      <!-- <img
        src="https://gitee.com/adya/images/raw/master/img/lALPDgQ9zchxJh3NA6nNB28_1903_937.png"
      /> -->
    </div>
      <!-- 钉钉二维码 -->
    <!-- </div> -->
    <div id="ding-login" v-if="isShow">
  </div>
  </div>
</template>

<script>
import qs from 'qs'
let appid= 'dingyeg1sljjmk0vppsl'
// let appSecret = '**************************'
let redirect = encodeURIComponent(`http://localhost:8080/#/loginend`)
// 官网给的跳转连接格式
let http_url = encodeURIComponent(`http://oapi.dingtalk.com/connect/qrconnect?appid=${appid}&response_type=code&scope=snsapi_login&state=STATE&redirect_uri=${redirect}`)
export default {
  data(){
    return{
      isShow:true,
      code: qs.parse(window.location.hash.substring(3)).code // 获取的临时登陆码
    }
  },
  created(){
    // console.log(this.code);
    this.clickExit()
   
if(this.code){
			/* 这里写登录方法 */
			return false
		}
    var handleMessage = function (event) {
      // console.log("code",this.code);
  var origin = event.origin;
  console.log("origin", event.origin);
  if( origin == "https://login.dingtalk.com" ) { //判断是否来自ddLogin扫码事件。
    var loginTmpCode = event.data; 
    //获取到loginTmpCode后就可以在这里构造跳转链接进行跳转了
     window.location.href =`https://oapi.dingtalk.com/connect/oauth2/sns_authorize?appid=${appid}&response_type=code&scope=snsapi_login&state=STATE&redirect_uri=${redirect}&loginTmpCode=${loginTmpCode}`
    console.log("loginTmpCode", loginTmpCode);
    //  console.log("code",code);
    
    // location.href = url  
    // console.log(location.href);
  }
};
if (typeof window.addEventListener != 'undefined') {
    window.addEventListener('message', handleMessage, false);
} else if (typeof window.attachEvent != 'undefined') {
    window.attachEvent('onmessage', handleMessage);
}
		if (typeof window.addEventListener != 'undefined') {
			window.addEventListener('message', handleMessage, false);
		} else if (typeof window.attachEvent != 'undefined') {
			window.attachEvent('onmessage', handleMessage);
		}
  },
  methods: {
clickExit() {
  // this.login=!this.login
  // 这边需要用 $nextTick() 方法来等DOM渲染完成后，才能获取到盒子容器（$nextTick 方法见另一篇文章）
			this.$nextTick(() => {
			// 钉钉登录，参数文档中那些其他项就不展示了，按照文档自己配置就可以
				var obj = DDLogin({
					id: "ding-login",
					goto: http_url,
					style: "border:none;background-color:#FFFFFF;",
				})
				// 重置扫码登录框的样式，让登录框居中
				let box = document.getElementById('ding-login')
				box.querySelector('iframe').style.position = 'absolute'
				box.querySelector('iframe').style.top = '0'
				box.querySelector('iframe').style.bottom = '0'
				box.querySelector('iframe').style.left = '0'
				box.querySelector('iframe').style.right = '0'
				box.querySelector('iframe').style.margin = 'auto'

			})
    },
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
  width: 4rem;
  height: 4rem;
  /* background-color: black; */
  border-radius: 3px;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>