import { defineComponent } from 'vue';
import { Charts } from '../components/statistics/Charts';
import s from './StatisticsPage.module.scss';
import { TimeTabsLayout } from '../layouts/TimeTabsLayout';

export const StatisticsPage = defineComponent({
  setup: (props, context) => {
    return () => (
      <TimeTabsLayout component={Charts}></TimeTabsLayout>
    )
  }
})