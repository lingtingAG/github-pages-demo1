import { computed, defineComponent, PropType, ref } from 'vue';
import { EmojiSelect } from './EmojiSelect';
import s from './Form.module.scss';
import { DatePicker, Popup } from "vant";
import { Time } from "../shared/Time";
import { Button } from './Button';

export const Form = defineComponent({
  props: {
    onSubmit: {
      type: Function as PropType<(e: Event) => void>,
    },
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
      type: String as PropType<'text' | 'emojiSelect' | 'date' | 'validationCode' | 'select'>,
    },
    error: {
      type: String,
    },
    placeholder: String,
    options: {
      type: Array as PropType<Array<{ value: string, text: string }>>,
    },
    onClick: {
      type: Function as PropType<() => void>,
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
            placeholder = {props.placeholder}
            value={props.modelValue}
            onInput={(e: any) => context.emit('update:modelValue', e.target.value)}
            class={[s.formItem, s.input]} />
        case 'emojiSelect':
          return <EmojiSelect
            onUpdate:modelValue = {value => context.emit('update:modelValue', value)}
            class={[s.formItem, s.emojiList, s.error]} />
        case 'validationCode':
          return <>
            <input
              placeholder = {props.placeholder}
              class={[s.formItem, s.input, s.validationCodeInput]}
              onInput={(e: any) => context.emit('update:modelValue', e.target.value)} />
            <Button onClick={props.onClick} class={[s.formItem, s.validationCodeButton]}>提交</Button>
          </>
        case 'date':
          return<>
            <input
              placeholder = {props.placeholder}
              readonly={true} value={props.modelValue}
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
        case 'select':
          return <select class={[s.formItem, s.select]} value={props.modelValue}
            onChange={(e: any) => context.emit('update:modelValue', e.target.value)}>
            {props.options?.map(option =>
              <option value={option.value}>{option.text}</option>
            )}
          </select>
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
              <span>{props.error ?? '　'}</span>
            </div>
          }
        </label>
      </div>
    }
  }
})