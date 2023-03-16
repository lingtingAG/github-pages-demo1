import { defineComponent, PropType } from "vue";
import s from './FloatButton.module.scss';
import { Icon, IconNames } from "./Icon";

export const FloatButton = defineComponent({
  props: {
    iconName: {
      type: String as PropType<IconNames>,
      required: true,
    }
  },
  setup: (props, context) => {
    return () => (
      <div class={s.floatButton}>
        <Icon name={props.iconName} class={s.icon} />
      </div>
    );
  },
});
