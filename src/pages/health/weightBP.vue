<template>
	<view>
		<view class="weight-BP">
			<!-- 所有内容的容器 -->
      <view class="addbtn">
        <u-button type="primary">记录一下心率体重吧~</u-button>
      </view>
		</view>
		<!-- 与包裹页面所有内容的元素u-page同级，且在它的下方 -->
		<u-tabbar v-model="current" :list="footBarList" :mid-button="false"></u-tabbar>
	</view>
</template>

<script>
  import { tabBar } from '../../../common/common'
	export default {
		data() {
			return {
				footBarList: tabBar,
				current: 1
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="sass" scoped>

  

</style>
