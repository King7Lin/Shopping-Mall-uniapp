<template>
	<view>
		<van-cell is-link :title="name" @click="show = true" />
		<van-action-sheet 
		v-model="show" 
		title="标题" 
		:show="show" 
		closeable="true"
		@close="onSelect">
		  
		</van-action-sheet>
	</view>
</template>

<script>
	export default {
		name:"choose ",
		data() {
			return {
				show:false,
			};
		},
		props:{
			name:''
		},
		methods:{
			onSelect(){
				this.show = false;
			}
		}
	}
</script>

<style>

</style>
