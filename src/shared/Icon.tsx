import { defineComponent, PropType} from 'vue';
import s from './Icon.module.scss';

export type IconNames = 'add' | 'chart' | 'clock' | 'cloud' | 'logo' | 'pig' | 'menu' | 'overchart' | 'overexport' | 'overnotify' | 'back'

export const Icon = defineComponent({
  props: {
    name: {
      type: String as PropType<IconNames>,
      required: true,
    },
    onClick: {
      type: Function as PropType<(e: MouseEvent) => void>,
    }
  },
  setup: (props, context) => {
    return () => (
      <svg class={s.icon} onClick={props.onClick}>
        <use xlinkHref={'#' + props.name}></use>
      </svg>
    )
  }
})