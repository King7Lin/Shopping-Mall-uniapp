<template>
	<view>
		<!-- <text>order{{active}}</text> -->
		<navigator url="">
			<van-card
			  num="2"
			  price="2.00"
			  desc="描述信息"
			  title="商品标题"
			  thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
			/>
		</navigator>
	</view>
</template>

<script>
	export default {
		name:"order",
		props:['active'],
		data() {
			return {
				
			};
		}
	}
</script>

<style>

</style>
