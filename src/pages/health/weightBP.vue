<template>
  <view>
    <view class="weight-BP">
      <!-- 所有内容的容器 -->
      <view class="addbtn">
        <u-button @click="linkTo('/pages/health/addWeightBP')" type="primary" :plain="true" :ripple="true">记录一下心率体重吧~</u-button>
      </view>
      <!-- u-charts -->
      <view class="qiun-columns">
        <view class="qiun-bg-white qiun-title-bar qiun-common-mt" >
          <view class="qiun-title-dot-light">最近一周记录</view>
        </view>
        <view class="qiun-charts" >
          <canvas canvas-id="canvasLineA" id="canvasLineA" class="charts" @touchstart="touchLineA"></canvas>
        </view>
      </view>
    </view>
    <!-- 与包裹页面所有内容的元素u-page同级，且在它的下方 -->
    <u-tabbar v-model="current" :list="footBarList" :mid-button="false"></u-tabbar>
  </view>
</template>

<script>
  import { tabBar } from '../../../common/common'
  import uCharts from '../../components/u-charts.js';
  var _self;
	var canvaLineA=null;
  export default {
    data() {
      return {
        footBarList: tabBar,
        current: 1,
        chartData: {
          categories: ['2012', '2013', '2014', '2015', '2016', '2017'],
          series: [{
            name: '数值A',
            data: [35, 20, 25, 37, 4, 20],
            color: '#000000'
          }, {
            name: '数值B',
            data: [70, 40, 65, 100, 44, 68]
          }, {
            name: '数值C',
            data: [100, 80, 95, 150, 112, 132]
          }]
        }
      }
    },
    onLoad() {
      _self = this;
      this.cWidth=uni.upx2px(750);
      this.cHeight=uni.upx2px(500);
      this.getChartLine()
    },
    mounted(){
    },
    methods: {
      getChartLine(){
        canvaLineA=new uCharts({
          $this:_self,
          canvasId: "canvasLineA",
          type: 'line',
          fontSize:11,
          legend:{show:true},
          dataLabel:false,
          dataPointShape:true,
          background:'#FFFFFF',
          pixelRatio:1,
          categories: this.chartData.categories,
          series: this.chartData.series,
          animation: true,
          xAxis: {
            type:'grid',
            gridColor:'#CCCCCC',
            gridType:'dash',
            dashLength:8
          },
          yAxis: {
            gridType:'dash',
            gridColor:'#CCCCCC',
            dashLength:8,
            splitNumber:5,
            min:10,
            max:180,
            format:(val)=>{return val.toFixed(0)}
          },
          width: this.cWidth,
          height: this.cHeight,
          extra: {
            line:{
              type: 'straight'
            }
          }
        });        
      },
      touchLineA(e) {
				canvaLineA.showToolTip(e, {
					format: function (item, category) {
						return category + ' ' + item.name + ':' + item.data 
					}
				});
			},
      linkTo(path){
        uni.navigateTo({
          url: path
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
.addbtn{
  width:90%;
  margin: 0.5rem auto 0;
}
  
// u-charts
	/*样式的width和height一定要与定义的cWidth和cHeight相对应*/
	.qiun-charts {
		width: 750upx;
		height: 500upx;
		background-color: #FFFFFF;
	}
	
	.charts {
		width: 750upx;
		height: 500upx;
		background-color: #FFFFFF;
	}
  .qiun-title-dot-light{
    font-size: 0.8rem;
    text-indent: 0.5rem;
  }
  .qiun-columns{
    padding-top: 0.5rem;
  }
</style>
