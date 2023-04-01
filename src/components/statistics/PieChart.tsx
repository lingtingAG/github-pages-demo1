import { defineComponent, onMounted, ref } from 'vue';
import s from './PieChart.module.scss';
import * as echarts from 'echarts';

export const PieChart = defineComponent({
  setup: (props, context) => {
    const refDiv2 = ref<HTMLDivElement>();
    onMounted(() => {
      if(refDiv2.value === undefined) return;
      var myChart2 = echarts.init(refDiv2.value);
      myChart2.setOption({
        grid: [
          { top: 0, left: 0, right: 0 }
        ],
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '95%',
            data: [
              { value: 1048, name: 'Search Engine' },
              { value: 735, name: 'Direct' },
              { value: 580, name: 'Email' },
              { value: 484, name: 'Union Ads' },
              { value: 300, name: 'Video Ads' }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      });
    })
    return () => (
      <div ref={refDiv2} class={s.wrapper}></div>
    )
  }
})