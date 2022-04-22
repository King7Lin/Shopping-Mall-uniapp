<template>
	<view class="container">
		<van-tree-select 
			height="100vh" 
			:items="shops" 
			:main-active-index.sync="activeKey"
			:active-id.sync="activeId"
			@click-nav="onNavClick" 
			>
		  <template #content>
			  <!-- 商品列表 -->
			  
					<view class="shop" v-for="(item,index) in shops" :key="index"  v-if="activeKey === index">
						<view class="left">
							<image class="shop-img" :src="item.img" mode="widthFix"></image>
						</view>
						<view class="right">
							<view class="title">
								{{item.name}}
							</view>
							<view class="green-tab">
								<van-icon name="hot" />
								<text>先用后付</text>
							</view>
							<view class="r-bottom">
								<text class="price">¥{{item.price}}</text>
								<text class="sales">销量{{item.sales}}</text>
							</view>
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
				
				shops:[
					{
						text:'家用电器',
						img:'../../static/c3.png',
						name:'白给商城1',
						price:999,
						sales:5412		
					},
					{
						text:'个人清洁',
						img:'../../static/c4.png',
						name:'白给商城2',
						price:1999,
						sales:8746
							
					},
					{
						text:'零食专区',
						img:'../../static/c5.png',
						name:'白给商城3',
						price:2999,
						sales:1235
					},
				],
				
			}
		},
		methods: {
			onNavClick(e){
				
				this.activeKey=e.detail.index
			}
		},
		components:{

		}
	}
</script>

<style>
	.shop{
		display: flex;
		margin: 10px;
		width: 250px;
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
		font-size: 17px;
		color: red;
	}
	.sales{
		color: rgb(131, 130, 130);
		     margin-left: 30rpx;
		     font-size: 28rpx;
	}
	/* .container{
		display: flex;
		height: 100vh;
		margin: 15rpx;
		
	}
	.top{
		position: absolute;
		top: 0;
	}
	.body{
		margin-top: 100rpx;
	}
	.classification{
		flex: 1;
		display: flex;
		flex-direction: column;
		border-bottom: 1px solid #000000;
		width: 120rpx;
		height: 80rpx;
		font-size: 36rpx;
		font-weight: bold;
		padding-left: 20rpx;
		margin-top: 20rpx; 
		text-align: center;
		justify-content: center;
	}
	.left{
		flex: 7;
		border-right: 1px solid #909399;
	} */
</style>
