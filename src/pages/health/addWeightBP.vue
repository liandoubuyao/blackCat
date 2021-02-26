<template>
	<view>
		<view class="addWeight-BP">
			<!-- 所有内容的容器 -->
			<view class="title">↓↓↓选择今天的体重哦↓↓↓</view>
			<u-row gutter="16" @click="openWeightSelect">
				<u-col span="3.5">
				</u-col>
				<u-col span="1">
					<view class="layout">{{weightArr[0]}}</view>
				</u-col>
				<u-col span="1">
					<view class="layout">{{weightArr[1]}}</view>
				</u-col>
				<u-col span="1">
					<view class="layout">{{weightArr[2]}}</view>
				</u-col>
				<u-col span="0.3">
					<view class="layout dot">.</view>
				</u-col>
				<u-col span="1">
					<view class="layout">{{weightArr[3]}}</view>
				</u-col>
				<u-col span="3">
					<view class="layout text-left">斤</view>
				</u-col>
			</u-row>
			<u-select :default-value="weightArr" v-model="showWeightSelect" mode="mutil-column" :list="list" @confirm="confirm"></u-select>
			<view class="weightBtn">
				<u-button @click="submit" type="primary" :plain="true" :ripple="true">提交</u-button>
			</view>
		</view>
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	import {postFormAPI} from '../../api/api'
	export default {
		data() {
			return {
				showWeightSelect:false,
				list:[
					[{value:"0",label:"0"},{value:"1",label:"1"},{value:"2",label:"2"},{value:"3",label:"3"},{value:"4",label:"4"},{value:"5",label:"5"},{value:"6",label:"6"},{value:"7",label:"7"},{value:"8",label:"8"},{value:"9",label:"9"},],
					[{value:"0",label:"0"},{value:"1",label:"1"},{value:"2",label:"2"},{value:"3",label:"3"},{value:"4",label:"4"},{value:"5",label:"5"},{value:"6",label:"6"},{value:"7",label:"7"},{value:"8",label:"8"},{value:"9",label:"9"},],
					[{value:"0",label:"0"},{value:"1",label:"1"},{value:"2",label:"2"},{value:"3",label:"3"},{value:"4",label:"4"},{value:"5",label:"5"},{value:"6",label:"6"},{value:"7",label:"7"},{value:"8",label:"8"},{value:"9",label:"9"},],
					[{value:"0",label:"0"},{value:"1",label:"1"},{value:"2",label:"2"},{value:"3",label:"3"},{value:"4",label:"4"},{value:"5",label:"5"},{value:"6",label:"6"},{value:"7",label:"7"},{value:"8",label:"8"},{value:"9",label:"9"},],
				],
				weightArr:[1,8,8,1],
				userInfo:null,
			}
		},
		onLoad() {
			// this.$isLogin()
			this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
		},
		computed:{
			weight:function(){
				let result;
				result = this.weightArr[0]+''+ this.weightArr[1]+''+ this.weightArr[2]+'.'+ this.weightArr[3]
				return result
			}
		},
		methods: {
			confirm(data){
				let newWeight = [];
				for(let i = 0; i < data.length; i++){
					newWeight.push(data[i].value);
				}
				this.weightArr = newWeight;
			},
			openWeightSelect(){
				this.showWeightSelect = true;
			},
			submit(){
				console.log(this.weight)
				let params = {};
				params.weight = this.weight;
				params.userId = this.userInfo.id;
				postFormAPI("/api/healthInformation/save",params).then(res=>{
					console.log(res)
					if(res.data.code == 200){
						this.$refs.uToast.show({
							title: res.data.msg,
							type: 'success'
						})
						setTimeout(()=>{
							uni.navigateBack()
						},2000)
					}else{
						this.$refs.uToast.show({
							title: res.data.msg,
							type: 'error'
						})
					}
				}).catch(err=>{
					this.$refs.uToast.show({
						title: err,
						type: 'error'
					})
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.addWeight-BP{
	.title{
		text-align: center;
		font-size: 25upx;
		padding: 10upx;
	}
	.layout{
		border: 1px solid rgb(190, 190, 190);
		border-radius: 10upx;
		height: 60upx;
		line-height: 60upx;
		text-align: center;
		font-size: 40upx;
		&.dot{
			border: none;
		}
		&.text-left{
			text-align: left;
			border: none;
			font-size: 30upx;
			line-height: 75upx;
		}
	}
	.weightBtn{
		width:90%;
		margin: 0.5rem auto 0;
	}
}
</style>
