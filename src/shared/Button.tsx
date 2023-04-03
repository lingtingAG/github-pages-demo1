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
    type: {
      type: String as PropType<'button' | 'submit' | 'reset'>,
      default: 'button',
    }
  },
  setup: (props, context) => {
    return () => (
      <button onClick={props.onClick} class={[s.button, s[props.level]]} type={props.type}>
        {context.slots.default?.()}
      </button>
    )
  }
})