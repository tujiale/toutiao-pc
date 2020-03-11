<template>
  <!-- 二级路由的默认组件 -->
  <div class="second-home">
    <!-- 幻灯片 -->
    <el-carousel :interval="4000" type="card" height="300px">
      <el-carousel-item v-for="item in list" :key="item">
         <img :src="item" alt="">
      </el-carousel-item>
    </el-carousel>
     <!-- 放置图表组件 -->
    <!-- ref -->
    <el-row type='flex' justify="space-around">
    <div ref="myChart" class="eharts"></div>
    <div ref="myChart2" class="eharts"></div>
    </el-row>
  </div>
</template>

<script>
// 引入图表模板
// 图表本身是用canvas实现的
import ECharts from 'echarts'
export default {
  mounted () {
    // 进行 echart图表的实例化
    this.myChart = ECharts.init(this.$refs.myChart) // 实例化 得到一个图表的实例化对象
    this.myChart2 = ECharts.init(this.$refs.myChart2) // 实例化 得到一个图表的实例化对象

    // this.myChart就是图表对象
    this.myChart.setOption({
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
      }]
    })

    this.myChart2.setOption({
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        left: 10,
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center'
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: '30',
                fontWeight: 'bold'
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [
            { value: 335, name: '直接访问' },
            { value: 310, name: '邮件营销' },
            { value: 234, name: '联盟广告' },
            { value: 135, name: '视频广告' },
            { value: 1548, name: '搜索引擎' }
          ]
        }
      ]
    })
  },
  data () {
    return {
      list: [
        'http://hiphotos.baidu.com/feed/pic/item/cdbf6c81800a19d8b402264c3efa828ba61e4671.jpg',
        'http://05.imgmini.eastday.com/mobile/20180129/20180129130242_02a1425058e321e6296260973b376baa_13.gif',
        'http://p0.ssl.cdn.btime.com/t01eb577203357396c9.gif?size=500x270',
        'http://5b0988e595225.cdn.sohucs.com/q_70,c_zoom,w_640/images/20180528/707ebed5d7364256b3c5729c01cd3733.gif']
    }
  }
}
</script>

<style lang='less'>
.second-home {
  /* calc 计算的意思 在css中计算数值 用法  calc ( 四则运算  ) 变量之间 和运算符之间一定要有空格 */
  height: calc(100vh - 60px);
   background-size: cover;
  background-image: url("http://www.caijiruanjian.com/lt/upMap/1483000062791.jpg");
  img {
    width: 100%;
    height: 100%;
  }
  .eharts {
    width: 600px;
    height: 400px;
    background-color: yellowgreen;
  }
}
</style>
