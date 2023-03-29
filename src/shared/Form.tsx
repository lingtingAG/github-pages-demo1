import { computed, defineComponent, PropType, ref } from 'vue';
import { EmojiSelect } from './EmojiSelect';
import s from './Form.module.scss';
import { DatePicker, Popup } from "vant";
import { Time } from "../shared/Time";

export const Form = defineComponent({
  props: {
    onSubmit: {
      type: Function as PropType<(e: Event) => void>,
    }
  },
  setup: (props, context) => {
    return () => (
      <form class={s.form} onSubmit={props.onSubmit}>
        {context.slots.default?.()}
      </form>
    )
  }
})

export const FormItem = defineComponent({
  props: {
    label: {
      type: String
    },
    modelValue: {
      type: [String, Number, Date]
    },
    type: {
      type: String as PropType<'text' | 'emojiSelect' | 'date'>,
    },
    error: {
      type: String,
    }
  },
  emits:['update:modelValue'],
  setup: (props, context) => {
    const refDateVisible = ref(false);
    const refTimeValue = ref(props.modelValue?.toString().split('-'));
    const content = computed(() => {
      switch (props.type) {
        case 'text':
          return <input
            value={props.modelValue}
            onInput={(e: any) => context.emit('update:modelValue', e.target.value)}
            class={[s.formItem, s.input, s.error]} />
        case 'emojiSelect':
          return <EmojiSelect
            onUpdate:modelValue = {value => context.emit('update:modelValue', value)}
            class={[s.formItem, s.emojiList, s.error]} />
        case 'date':
          return<>
              <input readonly={true} value={props.modelValue}
                onClick={() => { refDateVisible.value = true }}
                class={[s.formItem, s.input, s.error]} />
              <Popup position='bottom' v-model:show={refDateVisible.value}>
                <DatePicker
                  v-model={refTimeValue.value}
                  title="选择年月日"
                  onConfirm={({ selectedValues }) => {
                    context.emit('update:modelValue', new Time(selectedValues.join('-')).format())
                    refDateVisible.value = false
                  }}
                  onCancel={() => refDateVisible.value = false} />
              </Popup>
            </>
        case undefined:
          return context.slots.default?.()
      }
    })
    return () => {
      return <div class={s.formRow}>
        <label class={s.formLabel}>
          {props.label &&
            <span class={s.formItem_name}>{props.label}</span>
          }
          <div class={s.formItem_value}>
            {content.value}
          </div>
          {
            <div class={s.formItem_errorHint}>
              <span>{props.error}</span>
            </div>
          }
        </label>
      </div>
    }
  }
})