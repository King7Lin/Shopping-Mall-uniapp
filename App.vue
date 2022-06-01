<script>
	export default {
		  globalData:{
		    login:false,
			user_id:0
		  },

		onLaunch: function() {
			// this.globalData = {}
			
			console.warn('当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！')
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods:{

		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import '@/uni_modules/uni-scss/index.scss';
	@import "/wxcomponents/vant/common/index.wxss";
	/* #ifndef APP-NVUE */
	@import '@/static/customicons.css';
	// 设置整个项目的背景色
	page {
		background-color: #f5f5f5;
	}

	/* #endif */
	.example-info {
		font-size: 14px;
		color: #333;
		padding: 10px;
	}
	//设置圆角
	checkbox.round .wx-checkbox-input,
	checkbox.round .uni-checkbox-input {
		border-radius: 100upx;
	}
	
	//设置背景色
	checkbox.red[checked] .wx-checkbox-input,
	checkbox.red.checked .uni-checkbox-input{
		background-color: #e54d42 !important;
		border-color: #e54d42 !important;
		color: #ffffff !important;
	}
	.van-card__title {
		overflow-y: hidden;
		height: 130rpx;
	}
</style>
