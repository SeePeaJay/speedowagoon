<template>
  <va-card title="Vehicle distribution by branch">
    <va-chart class="chart chart--donut" :data="donutChartData" type="donut"/>
  </va-card>
</template>

<script>
import { getDonutChartData } from '../../data/charts/DonutChartData'

export default {
  name: 'dashboard-charts',
  data () {
    return {
      donutChartData: {},
      lineChartFirstMonthIndex: 0,
    }
  },
  watch: {
    '$themes.primary' () {
      getDonutChartData(this.$themes).then((generatedData) => {
        this.donutChartData = generatedData
      })
    },

    '$themes.info' () {
      getDonutChartData(this.$themes).then((generatedData) => {
        this.donutChartData = generatedData
      })
    },

    '$themes.danger' () {
      getDonutChartData(this.$themes).then((generatedData) => {
        this.donutChartData = generatedData
      })
    },
  },
  methods: {
    deleteSection () {
      this.lineChartFirstMonthIndex += 1
      this.$refs.lineChart.$refs.chart.refresh()
    },
    printChart () {
      const win = window.open('', 'Print', 'height=600,width=800')
      win.document.write(`<br><img src='${this.donutChartDataURL}'/>`)
      // TODO: find better solution how to remove timeout
      setTimeout(() => {
        win.document.close()
        win.focus()
        win.print()
        win.close()
      }, 200)
    },
  },
  computed: {
    donutChartDataURL () {
      return document.querySelector('.chart--donut canvas').toDataURL('image/png')
    },
  },
  created () {
    getDonutChartData(this.$themes).then((generatedData) => {
      this.donutChartData = generatedData
    })
  },
}
</script>

<style scoped>
  .chart {
    height: 400px;
  }
</style>
