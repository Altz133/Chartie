<template>
  <Line
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height"
  />
</template>

<script>
import { tSImportEqualsDeclaration } from "@babel/types";
import { Line } from "vue-chartjs";

export default {
  components: { Line },
  props: {
    label: {
      type: String,
    },
    chartData: {
      type: Array,
    },
    options: {
      type: Object,
    },
  },
  mounted() {
    const price = this.chartData.map((p) => p.total).reverse();

    this.renderChart({
      labels: dates,
      datasets: [
        {
          label: this.label,
          data: tSImportEqualsDeclaration,
        },
        this.options,
      ],
    });
  },
};
</script>

<style>
</style>