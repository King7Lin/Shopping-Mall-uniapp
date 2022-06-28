<template>
	<view>
		<van-notice-bar left-icon="volume-o"  scrollable text="右滑删除地址,左滑编辑地址。"  />
		<van-notify id="van-notify" />
		<van-swipe-cell right-width="55" left-width="55"  v-for="(item,index) in addressList" :key='index' class='container1'>
		  <van-cell-group >
		    	<view class="top">
		    	  <view class="name">{{item.name}}</view>
		    	  <view class="number"> {{item.number}}</view>
		    	</view>
		    	<view class="address">
		    		{{item.address}}
		    	</view>
		    	<view class="default">
		    		<checkbox :class="checked == true?'active round red default':'round red default'" :checked="item.address_default==0?false:true" :disabled="item.address_default==0?false:true" @click="Add_default(item)">默认</checkbox>
		    	</view>
		  </van-cell-group>
		  <template #right>
		    <button class="delete-button" @click="right(item)">删除</button>
		  </template>
		  <template #left>
		    <button class="default-button" @click="left(item)">编辑</button>
		  </template>
		</van-swipe-cell>
		<view class="add-address" @click="addAddress">
			新增地址
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				img:'../../static/add.png',
				// source: 0,
				addressList: [],
				checked:true,
				user_id:getApp().globalData.user_id
			}
		},
		 mounted() {
			
			uni.request({
				url:'http://47.94.11.39:3007/all/selectAddress?user_id=' + this.user_id,
				success: (res) => {
					this.addressList = res.data
					const a = getApp().getAddress
					console.log('address',getApp().globalData.address)
				}
			})
		},
		methods: {
			addAddress(){
				uni.navigateTo({
					url: './addAddress'
				})
			},
			// 删除
			right(e){
				console.log(e)
				uni.request({
					url:'http://47.94.11.39:3007/all/deleteAddress?user_id='+ this.user_id +'&id='+ e.id,
					success: (res) => {
						console.log(res)
						if(res.data.status !== 1){
							this.$notify({ type: "success", message: "删除成功" });
						}else{
							this.$notify({ type: "danger", message: "删除失败,请联系客服" });
						}
					}
				})
			},
			// 编辑
			left(e){
				let address ='[' + JSON.stringify(e) + ']'
				console.log(address)
				uni.navigateTo({
					url:'./editAddress?address='+ address
				})
			},
			// 设置默认
			Add_default(e){
				console.log(e)
				uni.request({
					url:'http://47.94.11.39:3007/all/updateDefault?user_id='+ this.user_id +'&id='+ e.id,
					success: (res) => {
						console.log(res)
						// to = true
						if(res.data.status !== 1){
							this.$notify({ type: "success", message: "设置成功" });
							this.addressList.forEach(value=>{
								value.address_default = 0
							})
							e.address_default = 1
						}else{
							this.$notify({ type: "danger", message: "设置失败,请联系客服" });
						}
						
					}
				})
			},
			//添加或修改成功之后回调
			refreshList(data, type){
				//添加或修改后事件，这里直接在最前面添加了一条数据，实际应用中直接刷新地址列表即可
				this.addressList.unshift(data);
				
				console.log(data, type);
			}
		}
	}
</script>

<style>
	page {
	  display: flex;
	  flex-direction: column;
	  height: 100%;
	  /* padding-top: 30rpx; */
	}
	.van-notice-bar{
		margin-bottom: 20rpx;
	}
	.top{
		display: flex;
		margin: 0rpx 20rpx 10rpx 20rpx;
	}
	.number{
		padding-left: 30rpx;
		color: #848484;
	}
	.address{
		width: 78%;
		padding-left: 20rpx;
		padding-bottom: 20rpx;
		border-bottom: 1px solid #666;
	}
	.default{
		position: relative;
		top: -55rpx;
		left: 300rpx;
	}
	.delete-button{
	  height: 70%;
			display: flex;
			justify-content: center;
			text-align: center;
			line-height: var(--button-line-height,55px);
			font-size: var(--button-normal-font-size,14px);
			color: #fff;
			background-color: red;
	}
	.default-button{
		height: 70%;
					display: flex;
					justify-content: center;
					text-align: center;
					line-height: var(--button-line-height,55px);
					font-size: var(--button-normal-font-size,14px);
					color: #fff;
					background-color: limegreen;
	}
	.add-address {
	  margin: 0 auto;
	  margin-top: 30px;
	  width: 150px;
	  height: 35px;
	  border: 1px #000 solid;
	  line-height: 35px;
	  text-align: center;
	  color: #000;
	  border-radius: 5rpx;
	  display: block;
	}

</style>
