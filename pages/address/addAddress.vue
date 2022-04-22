<template>
	<view>
		<view class="container">
			<form @submit="formSubmit">
				<view class=" flex-container">
					<view class="title">收货人</view>
					<input class="uni-input" name="name" placeholder="请输入收货人名字" />
				</view>
				<view class="line"></view>
				<view class=" flex-container">
					<view class="title">手机号</view>
					<input class="uni-input" maxlength="11" type="number" name="tel" placeholder="请输入收货人手机号" />
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
					<textarea name="text" class="text" placeholder="街道,门牌号等" @blur="bindTextAreaBlur" />		
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
				 city:'选择城市',
			     name:'',
				 tel:'',
				 text:'',
				 
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
			         }
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
