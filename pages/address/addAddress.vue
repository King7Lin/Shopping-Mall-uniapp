<template>
	<view>
		<view class="container">
			<form @submit="formSubmit">
				<view class=" flex-container">
					<view class="title">收货人</view>
					<input class="uni-input" name="name" v-model="name" placeholder="请输入收货人名字" />
				</view>
				<view class="line"></view>
				<view class=" flex-container">
					<view class="title">手机号</view>
					<input class="uni-input" maxlength="11" type="number" name="tel" v-model="number" placeholder="请输入收货人手机号" />
				</view>
				<view class="line"></view>
				
					<picker name="city" mode="region" @change="bindPickerChange" :value="array" >
						
						<view class="uni-input flex-address">
							<view >所在地区</view>
							<view>{{city}}</view>
							<van-icon name="arrow" />
						</view>
					</picker>
				
				<view class="line"></view>
				<view class="flex-container">
					<view class="title">详细地址</view>	
					<textarea name="text" class="text" v-model="detail" placeholder="街道,门牌号等" @blur="bindTextAreaBlur" />		
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
		data(){
			  return {	
				 city:'请选择地区',
			     name:'',
				 number:'',
				 text:'',
				 detail:''
				 
			    };
		},
		methods:{
			// 选择城市
			 bindPickerChange(e) {
			            console.log('picker发送选择改变，携带值为', e.detail.value)
			            this.city = e.detail.value
			        },
			//详细地址
			 bindTextAreaBlur(e) {
			             console.log(e.detail.value)
			},
			formSubmit(){
				let number = parseInt(this.number)
				let isTel = /^([0-9]{3,4}-)?[0-9]{7,8}$/;
				let isMobile = /^1[3|4|5|7|8][0-9]{9}$/;
				
				if(!isMobile.test(number)){
				   return uni.showToast({
				   	title:'手机号格式错误',
					icon:'error'
				   })
				} 
				if(this.name == '' || this.city =='选择城市' || this.detail == ''){
					return uni.showToast({
						title:'请填写完整信息',
						icon:'error'
					})
				}
				console.log(this.name)
				console.log(this.city + this.detail)
				let user_id = getApp().globalData.user_id
				uni.request({
					url:`http://127.0.0.1:3007/all/insertAddress`,
					data:{
						user_id,
						number,
						address:this.city + ','+ this.detail,
						name:this.name
					},
					method:'post',
					header:{
						'content-type':'application/x-www-form-urlencoded'
					},
					success: (res) => {
						console.log(res)
						if(res.data.status==1){
							uni.showToast({
								title:'保存失败',
								icon:'error'
							})
						}else{
							uni.showToast({
								title:'保存成功'
							})
							uni.navigateBack({
								url:'./address'
							})
						}
					}
				})
			}
		},
		mounted() {
			
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
