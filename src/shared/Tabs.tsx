import { defineComponent, PropType } from "vue";
import s from "./Tabs.module.scss";

export const Tabs = defineComponent({
  props: {
    selected: {
      type: String as PropType<string>,
    },
    // onUpdateSelected: {
    //   type: Function as PropType<(name: string) => void>,
    // },
  },
  setup: (props, context) => {
    return () => {
      const arr = context.slots.default?.();
      if (!arr) return () => null;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].type !== Tab) {
          throw new Error("<Tabs> only accepts <Tab> as Children");
        }
      }
      return (
        <div class={s.tabs}>
          <ol class={s.tabs_nav}>
            {arr.map((item) => (
              <li
                class={item.props?.name === props.selected ? s.selected : ""}
                // onClick={() => props.onUpdateSelected?.(item.props?.name)}
                onClick={() => context.emit('update:selected', (item.props?.name))}
              >
                {item.props?.name}
              </li>
            ))}
          </ol>
          <div></div>
        </div>
      );
    };
  },
});

export const Tab = defineComponent({
  props: {
    name: {
      type: String as PropType<string>,
    },
  },
  setup: (props, context) => {
    return () => <div>{context.slots.default?.()}</div>;
  },
});
