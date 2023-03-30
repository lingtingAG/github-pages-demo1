import { defineComponent, ref } from 'vue';
import s from './Charts.module.scss';
import { FormItem } from '../../shared/Form';

export const Charts = defineComponent({
  setup: (props, context) => {
    const category = ref('expenses');
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
      </div>
    )
  }
})