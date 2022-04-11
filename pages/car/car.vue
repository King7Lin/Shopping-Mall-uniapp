<template>
	<view>
			<van-notice-bar left-icon="volume-o"  scrollable text="右滑可以删除商品。"  />
			<van-empty
			  v-if="shop"
			  class="custom-image"
			  image="https://img.yzcdn.cn/vant/custom-empty-image.png"
			  description="购物车为空"
			/>
			<view class="container" v-else>
				<view class="left" >
					<label>
						<checkbox :value="result"  class="checkbox"/><text></text>
					</label>
				</view>
				<view class="right">
					<van-swipe-cell right-width="60" >
							  <van-card
								:num='value'
							  	price="2.00"
							  	desc="描述信息"
							  	title="商品标题"
							  	class="goods-card"
							  	thumb="https://img01.yzcdn.cn/vant/cat.jpeg"
								thumb-link='../details/details'
							   >
							   <view slot="footer">
							       <van-button size="mini" @click='value--'>-1</van-button>
							       <van-button size="mini" @click='value++'>+1</van-button>
							     </view>
							   </van-card>
					  <template #right>
					    <button class="delete-button" @click="right">删除</button>
					  </template>
					</van-swipe-cell>
				</view>
			</view>
			<!-- 底部结算栏 -->
		<van-submit-bar :price="price" button-text="购买" @submit="onSubmit">
		  <van-checkbox v-model="checkedAll">全选</van-checkbox>
		</van-submit-bar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				shop:[],
				price:0,
				value:1,
				checkedAll:false,
				checked:true,
				result: [],
			}
		},
		methods: {
			
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
</style>
