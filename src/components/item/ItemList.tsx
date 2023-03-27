import { defineComponent, PropType, ref } from 'vue';
import s from './ItemList.module.scss';
import { MainLayout } from '../../layouts/MainLayout';
import { Icon } from '../../shared/Icon';
import { Tab, Tabs } from '../../shared/Tabs';
export const ItemList = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    const refSelected = ref('本月');
    return () => (
      <MainLayout>{
        {
          title: () => '山竹记账',
          icon: () => <Icon name="menu"></Icon>,
          default: () => (
            <Tabs v-model:selected={refSelected.value} classPrefix="lt">
              <Tab name="本月" >list1</Tab>
              <Tab name="上月">list2</Tab>
              <Tab name="今年">list3</Tab>
              <Tab name="自定义时间">list4</Tab>
            </Tabs>
          )
        }
      }</MainLayout>
    )
  }
})