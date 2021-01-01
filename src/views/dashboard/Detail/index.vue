<template>
  <div class="detail-wrapper">
    <div class="detail-header">
      <backward-outlined style="padding-top: 4px"></backward-outlined>
      <a-button type="link" size="small" @click="goBack">返回</a-button>
    </div>
    <div id="charts" style="width: 1200px; height: 600px"></div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { BackwardOutlined } from "@ant-design/icons-vue";
import { EChartsOption, init as EchartsInit } from "echarts";
export default defineComponent({
  name: "commonDetail",
  components: {
    BackwardOutlined,
  },
  setup() {
    const router = useRouter();
    const goBack = () => {
      router.push("/dashboard/commonList");
    };
    return {
      goBack,
    };
  },
  methods: {
    drawChart() {
      const chartView = EchartsInit(
        document.getElementById("charts") as HTMLElement
      );
      const option = {
        title: {
          text: "最近排名",
        },
        legend: {
          data: ["排名"],
        },
        xAxis: {
          type: "category",
          data: [
            "2021年1月1日 19:35:26",
            "2021年1月2日 19:35:26",
            "2021年1月3日 19:35:26",
            "2021年1月4日 19:35:26",
            "2021年1月5日 19:35:26",
            "2021年1月6日 19:35:26",
          ],
        },
        yAxis: {
          inverse: true,
          scale: true,
          minInterval: 1,
          axisLabel: {
            formatter: "第{value}位",
          },
        },
        tooltip: {},
        series: [
          {
            name: "排名",
            type: "line",
            data: [1, 4, 3, 2, 3, 4],
          },
        ],
      };
      chartView.setOption(option as EChartsOption);
    },
  },
  mounted() {
    this.drawChart();
  },
});
</script>

<style lang='less'>
.detail-header {
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
}
</style>