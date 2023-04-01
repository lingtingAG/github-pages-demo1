import { defineComponent, ref, PropType, onMounted } from 'vue';
import s from './Charts.module.scss';
import { FormItem } from '../../shared/Form';
import * as echarts from 'echarts';

export const Charts = defineComponent({
  props: {
    startDate: {
      type: String as PropType<string>,
      required: true
    },
    endDate: {
      type: String as PropType<string>,
      required: true
    }
  },
  setup: (props, context) => {
    const category = ref('expenses');
    const refDiv = ref<HTMLDivElement>();
    const refDiv2 = ref<HTMLDivElement>();
    onMounted(() => {
      if(refDiv.value === undefined) return;
      var myChart = echarts.init(refDiv.value);
      myChart.setOption({
        grid: [
          { top: 0, left: 0, right: 0 }
        ],
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line'
          }
        ]
      });

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
      <div class={s.wrapper}>
        <FormItem
          label="类型"
          type="select"
          options={[
            { value: 'expenses', text: '支出' },
            { value: 'income', text: '收入' }
          ]}
          v-model={category.value}
        />
        <div ref={refDiv} class={s.demo}></div>
        <div ref={refDiv2} class={s.demo2}></div>
      </div>
    )
  }
})