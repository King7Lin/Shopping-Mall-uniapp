<template>
	<view>
			<van-notice-bar left-icon="volume-o"  scrollable text="右滑可以删除购物车中的商品。"  />
			<van-empty
			  v-if="shop.length==0"
			  class="custom-image"
			  image="https://img.yzcdn.cn/vant/custom-empty-image.png"
			  description="购物车为空"
			/>
			<form v-else>
				<view class="container" v-for="(item,index) in shop" :key='index'>
						<view class="left" >
							<label>
								<checkbox @click="show(item)" v-model="item[0].checked" :checked="item[0].checked" class="checkbox"/><text></text>
							</label>
						</view>
						<view class="right">
							<van-swipe-cell right-width="60">
								  <view @click="to(item[0].shop_id)">
									  <van-card
									  	:price="item[0].price"
									  	:title="item[0].title"
									  	class="goods-card"
									  	:thumb="item[0].img"
									   />
								  </view>
							  <template #right>
							    <button class="delete-button" @click="right">删除</button>
							  </template>
							  <view class="num">
							  	<button type="primary" size="mini" class="reduce" @click="reduce(item)">-1</button>
								<text class="text">x {{item[0].num}}</text>
							  	<button type="warn" size="mini" class="add" @click="add(item)">+1</button>
							  </view>
							</van-swipe-cell>
						</view>
					</view>
					<!-- 底部结算栏 -->
				<van-submit-bar :price="price" button-text="购买" @submit="onSubmit">
				  <van-checkbox v-model="checkedAll">全选</van-checkbox>
				</van-submit-bar>
			</form>
			
	</view>
</template>

<script>
	import commodity from "../../components/commodity.vue"
	
	export default {
		data() {
			return {
				shop:[],
				value:1,
				checkedAll:false,
				checked:true,
				result: [],
				num:1,
				price:0
			}
		},
		methods: {
			onSubmit(e){
				console.log(e)
				
				// uni.navigateTo({
				// 	url:'../settlement/settlement'
				// })
			},
			reduce(e){
				console.log(e)
				e[0].checked = false
				// if(e[0].checked ==false){
					
				// 	if(e[0].num>1){
				// 		e[0].num--
				// 		// this.show(e)
				// 	}else{
				// 		e[0].num=1
				// 	}
				// 	this.price = this.price
				// }else{
				// 	if(e[0].num>1){
				// 		e[0].num--
				// 		this.show(e)
				// 	}else{
				// 		e[0].num=1
				// 	}
				// }
				
				
				
				// this.show(e)
			},
			add(e){
				if(e[0].checked == false){
					e[0].num++
					this.price = this.price
				}else{
					e[0].num++
					// e[0].checked = true
					this.show(e)
				}
				
			},
			to(e){
				console.log(e)
				uni.navigateTo({
					url:'../details/details?shop_id='+e
				})
			},
			show(e){
				// e[0].checked == false?e[0].checked=true:e[0].checked=false
				// console.log(this.price)
				if(e[0].checked == false){
					e[0].checked=true
					this.price += e[0].price * 100 * e[0].num
				}else{
					e[0].checked=false
					this.price -= e[0].price * 100 * e[0].num
				}
			}
		},
		components:{
			commodity
		},
		// computed:{
		// 	all(){
		// 		let price = 0

		// 		this.shop.forEach((value)=>{
		// 			console.log(value[0])
		// 			if(value[0].checked == true) {
		// 				console.log(value[0])
		// 				price +=value[0].price
		// 			}
		// 		})
		// 		return price
		// 	}
		// },
		created() {
			uni.request({
				url:'http://127.0.0.1:3007/all/selectcart?user_id=1',
				success: (res) => {
					console.log(res)
					this.shop = res.data
					
					this.shop.forEach((value)=>{
						// console.log(value)
						value[0].checked = false
					})
					// console.log(this.shop)
				}
			})
		},
	}
</script>

<style>
	.container{
		display: flex;
		width: 100%;
	}
	.left{
		flex: 1;
		background-color: #fafafa;
	}
	.checkbox{
		text-align: center;
		margin-left: 10rpx;
		line-height: var(--button-line-height,100px);
	}
	.right{
		flex: 10;
	}
	.van-button{
	margin-right: 10rpx;
	}
	.goods-card {
	   margin: 0;
	   background-color: white;
	 }
	 .delete-button{
	   height: 100%;
			display: flex;
			justify-content: center;
			text-align: center;
			line-height: var(--button-line-height,120px);
			font-size: var(--button-normal-font-size,14px);
			color: #fff;
			background-color: red;
	 }
	 .delete-button{
	   height: 100%;
	 		display: flex;
	 		justify-content: center;
	 		text-align: center;
	 		line-height: var(--button-line-height,100px);
	 		font-size: var(--button-normal-font-size,14px);
	 		color: #fff;
	 		background-color: red;
	 }
	 .num{
		 display: flex;
		 position: absolute;
		 right: 0;
		 bottom: 0;
	 }
	 .reduce,.add{
		 margin: 10rpx;
	 }
	 .text{
		 line-height: 80rpx;
	 }
</style>
