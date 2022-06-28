<template>
	<view>
		<van-notify id="van-notify" />
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
								<checkbox class="round red" @click="show(item)" v-model="item[0].checked" :checked="item[0].checked"/><text></text>
							</label>
						</view>
						<view class="right">
							<van-swipe-cell right-width="60">
								  <view @click="to(item[0].shop_id)">
									  <van-card
									  	:price="item[0].price"
									  	:title="item[0].title"
										:desc='item[0].desc'
									  	class="goods-card"
									  	:thumb="item[0].img"
									   />
								  </view>
							  <template #right>
							    <button class="delete-button" @click="right(item[0],index)">删除</button>
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
				<van-submit-bar :price="one_checked" button-text="提交订单" @submit="onSubmit">
				  <checkbox class="round red" :checked="checked" @click='Allchecked'>全选</checkbox>
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
				checked:false,
				result: [],
				num:1,
				price:0,
				user_id:getApp().globalData.user_id
			}
		},
		methods: {
			// 减少
			reduce(e){
				console.log(e)
				e[0].checked = false
				if(e[0].checked ==false){
					
					if(e[0].num>1){
						e[0].num--
						// this.show(e)
					}else{
						e[0].num=1
					}
					this.price = this.price
				}else{
					if(e[0].num>1){
						e[0].num--
						this.show(e)
					}else{
						e[0].num=1
					}
				}
			},
			// 增加
			add(e){
				if(e[0].checked == false){
					e[0].num++
					// this.price = this.price
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
			// 价格
			show(e){
				// e[0].checked == false?e[0].checked=true:e[0].checked=false
				if(e[0].checked == false){
					e[0].checked=true
					this.price += e[0].price * 100 * e[0].num
				}else{
					e[0].checked=false
					this.price -= e[0].price * 100 * e[0].num
				}
				console.log(e)
			},
			// 全选
			Allchecked(e){
				if(this.checked == false){
					this.checked = true
					this.shop.forEach((value)=>{
						value[0].checked = true
					})
					
				}else{
					this.checked = false
					this.shop.forEach((value)=>{
						value[0].checked = false
					})
					
				}
				console.log(this.checked)
				// this.show()
			},
			// 删除
			right(e,index){
				const self = this
				console.log(self)
				console.log(e)
				uni.request({
					url:'http://47.94.11.39:3007/all/deleteCart?user_id='+ this.user_id +'&shop_id='+e.shop_id,
					success: (res) => {
						console.log(res)
						if(res.data.status ==1 ){
							this.$notify({ type: "danger", message: "删除失败,请联系客服" });
						}else{
							this.shop.splice(index,1)
							console.log(this.shop,index)
							this.$notify({ type: "success", message: "删除成功" });
							self.getshop()
							
							// const pages = getCurrentPages()
							// console.log(pages)
							// const curPage = pages[pages.length-1]
							// console.log(e,pages,curPage)
							// setTimeout(()=>{
							// 	uni.switchTab({
							// 		url:curPage.$page.fullPath
							// 	})
							// },500)
						}
					}
				})
			},
			// 提交订单
			onSubmit(e){
				console.log(e)
				let shop_id = []
				let shop=[]
				let desc =[]
				this.shop.forEach((value)=>{
					// console.log(value)
					if(value[0].checked == true){
						shop_id.push([value[0].shop_id,value[0].num])
						shop.push({shop:value[0],id:1})
						desc.push(value[0].desc)
					}	
				})
				console.log(shop_id)
				if(shop_id.length < 1){
					uni.showToast({
						title:'请选择商品',
						icon:'error'
					})
				}else{
					console.log(shop_id)
					uni.request({
						url:'http://47.94.11.39:3007/all/insertOrder',
						method:'post',
						header:{
							'content-type':'application/x-www-form-urlencoded'
						},
						data:{
							user_id:this.user_id,
							shop_id,
							desc
						},
						success: (res) => {
							console.log(res)
							let {id} = res.data
							console.log(id)
							let shop=[]
							this.shop.forEach((value)=>{
								// console.log(value)
								if(value[0].checked == true){
									shop.push(value[0])
								}	
							})
							let shop1 = JSON.stringify(shop)
							console.log(shop)
							if(res.data.status==1){
								uni.showToast({
									title:'操作失败',
									icon:'error'
								})
							}else{
								uni.navigateTo({
									url:'../settlement/settlement?id=' + id + '&shop=' + shop1
								})
							}
						}
					})
					// uni.navigateTo({
					// 	url:'../settlement/settlement?shop=' + shop
					// })
					console.log(shop)
				}
				
			},
			getshop(){
				uni.request({
					url:'http://47.94.11.39:3007/all/selectcart?user_id=' + this.user_id,
					success: (res) => {
						console.log(res)
						this.shop = res.data
					}
				})
			}
		},
		components:{
			commodity
		},
		computed:{
			one_checked(){
				// let price = 0

				return this.shop.reduce((sum,value)=>{
					if(value[0].checked == true){
						sum += value[0].price * value[0].num *100
					}
					return sum
				},0)
				// return price
			},
		},
		async mounted() {
			console.log('mounted')
			await this.getshop()
		},
		async onTabItemTap(e) {
			 console.log('onTabItemTap')
		    await this.getshop()
		},
		async onShow() {
			console.log('onShow')
			await this.getshop()
		},
		onPullDownRefresh (){
			console.log('onPullDownRefresh')
			this.getshop()
		}
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
	.red{
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
