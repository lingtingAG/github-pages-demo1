import { defineComponent } from "vue";
import s from './FloatButton.module.scss';
import { Icon } from "./Icon";

export const FloatButton = defineComponent({
  setup: (props, context) => {
    return () => (
      <div class={s.floatButton}>
        <Icon name="add" class={s.icon} />
      </div>
    );
  },
});
