<template>
	<view class="container">
		<van-cell is-link title="退出登录"  @click="login" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			login(){
				let app = getApp()
				app.globalData.login = false
				app.globalData.user_id = 0
				uni.removeStorage({
					key: 'token_key',
					success: function (res) {
						console.log('success');
					}
				});
				uni.showToast({
					title:'退出成功',
					icon:"success"
				})
				setTimeout(()=>{
					uni.redirectTo({
						url:'../login/login'
					})
				},500)
			}
		}
	}
</script>

<style>
	.container{
		margin: 20rpx 0;
	}
</style>
