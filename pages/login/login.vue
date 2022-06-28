<template>
	<view class="container">
		<van-notice-bar left-icon="volume-o"  scrollable text="账号开头不能是数字，不能包含空格，特殊标点符号，长度在 2 到 12 之间。"  />
		<van-notify id="van-notify" />
		<view class="tologin" v-if="register == false">
			<view class='img'>
				<open-data type="userAvatarUrl"></open-data>
			</view>
			<view class='text'>
				<open-data type="userNickName"></open-data>
			</view>
			<view class="login">
				<input v-model='username' @input="onKeyInput" class="name" type="text" placeholder="请输入用户账号">
				<input v-model="password"  class="password" type="password" placeholder="请输入用户密码">
			</view>
			<view class="button">
				<button class='toLogin' @click="login">登录</button>
				<button class="register" @click="Tregister">注册</button>
			</view>
		</view>
		
		<view class="toregister" v-else>
			<view class='img'>
				<open-data type="userAvatarUrl"></open-data>
			</view>
			<view class='text'>
				<open-data type="userNickName"></open-data>
			</view>
			<view class="login">
				<input v-model='Rusername' @input="onKeyInput" class="name" type="text" placeholder="请输入注册账号">
				<input v-model="Rpassword"  class="password" type="password" placeholder="请输入密码">
			</view>
			<text class="Ptext">#密码开头第一位必须是大写字母，不能包含空格，特殊标点符号，汉字，长度在 6 到 12 之间</text>
			<view class="button">
				<button class="register" @click="IsRegister">注册</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				username:'',
				Rusername:'',
				password:'',
				Rpassword:'',
				register:false
			}
		},
		methods: {
			onKeyInput(e){
				
			},
			// 登录
			login(){
				const user = /[a-zA-Z\u4E00-\u9FA5]{1}[a-zA-Z0-9\u4E00-\u9FA5]{1,12}/
				if(!user.test(this.username)){
					this.$notify({ type: "danger", message: "请注意账号格式" });
				}else{
					uni.request({
						url:'http://47.94.11.39:3007/api/login',
						data:{
							username:this.username,
							password:this.password
						},
						method:'post',
						header:{
							'content-type':'application/x-www-form-urlencoded'
						},
						success: (res) => {
							
							console.log(res)
							if(res.data.status === 0 ){
								this.$notify({ type: "success", message: "登录成功" });
								getApp().globalData.user_id = res.data.user_id
								getApp().globalData.login = true
								uni.setStorage({
									key:'token_key',
									data:res.data.token,
									success: (res) => {
										console.log(res)
									}
								})
								setTimeout(()=>{
									uni.redirectTo({
										url:'../index/index'
									})
								},500)
							}else{
								this.$notify({ type: "danger", message: "登录失败" });
							}
						},
						fail: (res) => {
							console.log(res)
						}
					})
				}
			},
			Tregister(){
				this.register = true
			},
			// 注册成功
			IsRegister(){
				const user = /[a-zA-Z\u4E00-\u9FA5]{1}[a-zA-Z0-9\u4E00-\u9FA5]{1,12}/
				const password = /[A-Z]{1}[a-zA-Z0-9]{5,15}/
				if(!user.test(this.Rusername)){
					this.$notify({ type: "danger", message: "请注意账号格式" });
				}else if(!password.test(this.Rpassword)){
					this.$notify({ type: "danger", message: "请注意密码格式" });
				}else{
					uni.request({
						url:'http://47.94.11.39:3007/api/regUser',
						data:{
							username:this.Rusername,
							password:this.Rpassword
						},
						method:'post',
						header:{
							'content-type':'application/x-www-form-urlencoded'
						},
						success: (res) => {
							console.log(res)
							if(res.data.status === 0 ){
								this.$notify({ type: "success", message: "注册成功" });
								const pages = getCurrentPages()
								console.log(pages)
								const curPage = pages[pages.length-1]
								// console.log(e,pages,curPage)
								setTimeout(()=>{
									uni.redirectTo({
										url:curPage.$page.fullPath
									})
									// this.register = false
								},500)
							}
						},
						fail: (res) => {
							console.log(res)
						}
					})
				}
			}
		}
	}
</script>

<style>
	.tologin,.toregister{
			margin: 80rpx;
			/* border: 1px solid #000; */
	}
	input{
		margin: 20rpx;
		padding: 12rpx;
		border: 1px solid #ccc;
	}
  .img{
	margin-left: 37%;
   width: 80px;
   height: 80px;
   overflow: hidden;
   border-radius: 50%;
 }
  .text{
   text-align: center;
   margin: 20rpx 0;
   font-size: 14px;
   color: #333333;
 }
 .Ptext{
	 text-align: center;
	 margin: 20rpx 0;
	 font-size: 12px;
	 color: red;
 }
 button{
	 width: 100%;
 }
 .button{
	 display: flex;
	 margin: 20rpx;
 }
 .toLogin{
	 flex: 3;
	color:#00c65c ;
	border:1px solid #00c65c;
 }
 .register{
	 flex:1;
	 color:#7232dd ;
	 border:1px solid #7232dd;
 }
</style>
