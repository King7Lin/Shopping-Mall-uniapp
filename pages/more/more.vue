<template>
	<view class="container">
		<van-tree-select 
			height="100vh" 
			:items="shopsList" 
			:main-active-index="activeKey"
			:active-id="activeId"
			@click-nav="onNavClick" 
			>
		  <template #content>
			  <!-- 商品列表 -->
				<view v-for="(shop,index) in shopsList" :key="index"  v-if="activeKey === index">
					<view class="shop" v-for="item in shop.children" :key="item.shop_id" @click="to(item.shop_id)">
							<van-card
							  :title='item.title'
							  :thumb='item.img'
							  :price='item.price'
							/>
					</view>
				</view>	
		  </template>
		</van-tree-select>
	</view>
</template>

<script>

	export default {
		data() {
			return {
				activeKey:0,
				shopsList:[],
			}
		},
		methods: {
			onNavClick(e){
				this.activeKey=e.detail.index
			},
			to(e){
				console.log(e)
				uni.navigateTo({
					url:'../details/details?shop_id='+e
				})
			}
		},
		components:{

		},
		created() {
			uni.request({
				url:'http://47.94.11.39:3007/all/selectMore',
				success: (res) => {
					let shop = []
					shop = res.data
					console.log(res)
					shop.forEach(value=>{
						this.shopsList.push({text:value[0],children:value[1]})
					})
					console.log(this.shopsList)
				}
			})
		}
	}
</script>

<style>
	.shop{
		display: flex;
		/* margin: 10px; */
		width: 100%;
		border-bottom: 1px solid gray;
	}
	.van-card{
		width: 270px;
	}
	.shop-img{
		width: 90px;
		height: 90px;
		border-radius: 2%;
	}
	.right{
		margin-left: 10px;
	}
	.title{
		font-weight: 550;
		font-size: small;
	}
	.green-tab{
		margin-top: 25px;
		color: green;
		font-size: 15px;
	}
	.r-bottom{
		display: flex;
		align-items: center;
		margin-top: 9px;
	}
	.price{
		position: relative;
		top: 60rpx;
		font-size: 17px;
		color: red;
	}
	.sales{
		color: rgb(131, 130, 130);
		     margin-left: 30rpx;
		     font-size: 28rpx;
	}
	
</style>
