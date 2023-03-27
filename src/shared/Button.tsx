import { defineComponent, PropType } from 'vue';
import s from './Button.module.scss';

interface Props {
  // onClick?: (e: MouseEvent) => void
}

export const Button = defineComponent({
  // inheritAttrs: false,
  props: {
    onClick: {
      type: Function as PropType<(e: MouseEvent) => void>,
    },
    level: {
      type: String as PropType<'primary' | 'normal' | 'danger'>,
      default: 'primary',
    },
  },
  setup: (props, context) => {
    return () => (
      <button class={[s.button, s[props.level]]}>
        {context.slots.default?.()}
      </button>
    )
  }
})