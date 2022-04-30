<template>
	<view class="container">
		<scroll-view class="scroll" scroll-y="true">
		  <!--wx:for="{{addressList}}"-->
		  <view>
			<view class="product-name-wrap" v-for="(item,index) in addressList" :key='index'>
			  <view class="ui-list-item-info">{{item.name}}
				<text class="blank"></text> {{item.number}}
			  </view>
			  <view class="ui-list-item-address">
				{{item.address}}
			  </view>
			  <!--默认和删除地址-->
			  <view class="ui-list-item-time">
					  <checkbox :checked="item.default" class="weui-agree__checkbox-check" aria-labelledby="js_agree_txt js_agree_link" />
					  <span class="weui-agree__text"><text aria-hidden="true" id="js_agree_txt">默认</text></span>
					  <p class="ui-list-item-del" @click="delAddress">删除</p>
					</view>
					<view class="separate"></view>
			</view>
		  </view>
		</scroll-view>
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
				addressList: []
			}
		},
		created() {
			uni.request({
				url:'http://127.0.0.1:3007/all/selectAddress?user_id=1',
				success: (res) => {
					this.addressList = res.data
					console.log(this.addressList)
				}
			})
		},
		methods: {
			addAddress(type, item){
				uni.navigateTo({
					url: './addAddress'
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
	@import 'cite/weui.css';
	page {
	  display: flex;
	  flex-direction: column;
	  height: 100%;
	}
	
	.product-name-wrap {
	  margin: 0px 10px;
	  font-size: 14px;
	  color: #404040;
	
	}
	
	.ui-list-item-info {
	  margin: 5px 0px;
	}
	/* 空格 */
	.blank{
		padding: 0px 10px;
	}
	.ui-list-item-address {
	  color: #585c64;
	}
	
	.ui-list-item-time {
	  margin: 5px 0px;
	}
	
	.ui-list-item-del {
	  float: right;
	  color: #585c64;
	}
	
	/* 分割线 */
	
	.separate {
	  margin: 5px 0px;
	  height: 2rpx;
	  background-color: #f2f2f2;
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
	
	.add-img {
	  margin-right: 15px;
	  width: 15px;
	  height: 15px;
	}
</style>
