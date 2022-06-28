<template>
	<view>

		<van-notify id="van-notify" />
		<view class="container">
			<form @submit="formSubmit">
				<view class=" flex-container">
					<view class="title">收货人</view>
					<input class="uni-input" name="name" v-model="name" :placeholder="address[0].name" />
				</view>
				<view class="line"></view>
				<view class=" flex-container">
					<view class="title">手机号</view>
					<input class="uni-input" maxlength="11" type="number" name="tel" v-model="number" :placeholder="address[0].number" />
				</view>
				<view class="line"></view>
					<picker name="city" mode="region" @change="bindPickerChange" :value="array" >
						<view class="uni-input flex-address">
							<view >所在地区</view>
							<view>{{array}}</view>
							<van-icon name="arrow" />
						</view>
					</picker>
				
				<view class="line"></view>
				<view class="flex-container">
					<view class="title">详细地址</view>	
					<textarea name="text" class="text" v-model="detail" :placeholder="detail" />		
				</view>
				<view class="line"></view>
				<view class="btn">
					<van-button form-type="submit" round size="large" type="danger">保存</van-button>	
				</view>
			</form>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				address:null,
				name:'',
				number:'',
				array:'',
				detail:''
			}
		},
		methods:{
			formSubmit(){
				console.log(this.name,this.number,this.array,this.detail)
				
					let number = parseInt(this.number)
					let isTel = /^([0-9]{3,4}-)?[0-9]{7,8}$/;
					let isMobile = /^1[3|4|5|7|8][0-9]{9}$/;
					
					if(!isMobile.test(number)){
					   return this.$notify({ type: "danger", message: "手机号格式错误" });
					} 
					console.log(this.name)
					console.log(this.city + this.detail)
					if(this.name == '' || this.city =='选择城市' || this.detail == ''){
						 return this.$notify({ type: "danger", message: "请填写完整信息" });
					}
					let user_id = getApp().globalData.user_id
					uni.request({
						url:`http://47.94.11.39:3007/all/updateAddress`,
						data:{
							id:this.address[0].id,
							user_id,
							number,
							address:this.array+this.detail,
							name:this.name
						},
						method:'post',
						header:{
							'content-type':'application/x-www-form-urlencoded'
						},
						success: (res) => {
							console.log(res)
							if(res.data.status==1){
								this.$notify({ type: "danger", message: "保存失败,请联系客服" });
							}else{
								this.$notify({ type: "primary", message: "保存成功" });
								setTimeout(()=>{
									uni.reLaunch({
										url:'./address'
									})
								},500)
							}
						}
					})
			},
			bindPickerChange(e){
				console.log(e)
				this.array = e.detail.value+','
			}
		},
		onLoad(option) {
			console.log(option)
			this.address = JSON.parse(option.address)
			let num = this.address[0].address.indexOf('区')
			this.name = this.address[0].name
			this.number = this.address[0].number
			this.array = this.address[0].address.slice(0,num+1)
			this.detail = this.address[0].address.slice(num+1)
			console.log(this.address[0].address)
		}
		
	}
</script>

<style>
.container{
		margin: 20px 20px;
	}
	.flex-container{
		display: flex;
		
	}
	.flex-address{
		display: flex;
		justify-content: space-between;
	}
	.line{
		margin: 15px 0px;
		border-bottom:1px solid #dddddd ;
	}
	.title{
		padding-right: 20px;
	}
	
	.text{
		width: 250px;
		height: 80px;
	}
	.btn{
		margin: 35px 0px;
	}
	
</style>
