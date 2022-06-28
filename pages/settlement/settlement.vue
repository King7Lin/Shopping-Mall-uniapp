<template>
	<view>
		<view class="address">
			<van-cell-group>
			  <van-cell :title="Daddress.name" :value="Daddress.number" :label="Daddress.address" is-link @click="showAddres = true"  />
			</van-cell-group>
		</view>
		<view class="shop">
			<van-card
			  v-for="item in shop"
			  :key="item.id"
			  :title='item.title'
			  :thumb='item.img'
			  :desc='item.desc'
			  :num='item.num'
			/>
		</view>
		<view class="pay">
			<van-submit-bar :price="money" button-text="给钱" @clickt="pay" />
		</view>
		
		<!-- props 地址弹出 -->
		<view class="">
			<van-popup
			  :show="showAddres"
			  round
			  position="bottom"
			  closeable="true"
			  custom-style="height: 65%"
			  @close="close"
			>
			<view class="content">
				<view class="address-title">
					<text>选择地址</text>
				</view>
					<radio-group name="addinf" @change="radioChange">
						<label  v-for="(item,index) in address" :key="index">
							<view class="address-content">
								<view class="address-flex">
									<uni-icons type="location-filled" size="30" style='line-height: 100rpx;'></uni-icons>
									<view>
										<view class="name">{{item.name}}</view>
										<view class="number">{{item.number}}</view>
										<view class="address">{{item.address}}</view>
									</view>									
								</view>
								<radio color="#007AFF" :value="item.id" :checked="address_check" />
							</view>
						</label>
						<view class="add-address" @click="addAddress">
							新增地址
						</view>
					</radio-group>
			</view>
			</van-popup>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				price:0,
				id:0,
				shop:[],
				address:'',
				Daddress:'',
				showAddres:false
			}
		},
		methods: {
			pay(){
				
			},
			close(){
				this.showAddres = false
			},
			radioChange(e) {
				console.log(e)
			    this.address.forEach(value=>{
					console.log(value.id)
					if(parseInt(e.detail.value) === value.id){
						this.Daddress = value
					}
				})
				console.log(this.Daddress)
			},
		},
		onLoad(option) {
			console.log(option)
			this.id = option.id
			this.shop = JSON.parse(option.shop)
			console.log(this.shop)
			let user_id = getApp().globalData.user_id
			uni.request({
				url:'http://47.94.11.39:3007/all/selectAddress?user_id='+user_id,
				success: (res) => {
					console.log(res)
					this.address = res.data
					if(option.address_id){
						this.address.forEach(value=>{
							if(value.id==parseInt(option.address_id)){
								this.Daddress = value
							}
						})
					}else{
						this.address.forEach(value=>{
							if(value.address_default === 1){
								this.Daddress = value
							}
						})
					}
				}
			})
			// this.price = option.price
		},
		computed:{
			money(){
				let num = 0
				if(this.shop.length>=1){
					this.shop.forEach(value=>{
						num += value.num*value.price *100
					})
				}else{
					num = this.shop.num * this.shop.price * 100
				}
				
				return num
			},
			address_check(){
				let num = 0
				if(this.address){
					this.address.forEach((value,index)=>{
						if(value.address_default === 1){
							num = index
						}
					})
				}
				return num
			}
		}
	}
</script>

<style>
page{
	margin: 2px 0 ;
}
.address{
	margin-bottom: 10px;
	border-bottom: 1px solid gray;
}
.van-card{
	border-bottom: 1px solid gray;
	/* border-top: 1px solid gray; */
	margin-bottom: 5px;
}
/* .shop{
	border: 1px solid gray;
} */
.content{
	    margin: 40rpx 20rpx 0rpx 20rpx;
		overflow-y: scroll;
		height: 100%;
	}
.address-title{
		text-align: center;
	}
	.address-content{
		margin-top: 25rpx;
		display: flex;
		justify-content: space-between;
	}
	.address-flex{
		display: flex;
		font-size: 16px;
	}
	.name{
		
	}
	.number{
		position: relative;
		top: -35rpx;
		left: 370rpx;
		color: gray;
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
