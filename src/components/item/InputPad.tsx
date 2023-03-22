import { Time } from "../../shared/time";
import { defineComponent, PropType } from "vue";
import { Icon } from "../../shared/Icon";
import s from "./InputPad.module.scss";

export const InputPad = defineComponent({
  props: {
    name: {
      type: String as PropType<string>,
    },
  },
  setup: (props, context) => {
    const now = new Date();
    const buttonMap = [
      { text: "1", onClick: () => {} },
      { text: "2", onClick: () => {} },
      { text: "3", onClick: () => {} },
      { text: "清空", onClick: () => {} },
      { text: "4", onClick: () => {} },
      { text: "5", onClick: () => {} },
      { text: "6", onClick: () => {} },
      { text: "+", onClick: () => {} },
      { text: "7", onClick: () => {} },
      { text: "8", onClick: () => {} },
      { text: "9", onClick: () => {} },
      { text: "-", onClick: () => {} },
      { text: ".", onClick: () => {} },
      { text: "0", onClick: () => {} },
      { text: "删", onClick: () => {} },
      { text: "提交", onClick: () => {} },
    ];
    return () => (
      <>
        <div class={s.dateAndAmunt}>
          <span class={s.date}>
            <Icon class={s.icon} name="date" />
            <span><input type="date" value = {new Time(now).format()} /></span>
          </span>
          <span class={s.amount}>123.45</span>
        </div>
        <div class={s.buttons}>
          {buttonMap.map(
            (
              button
            ) => (
              <button onClick={button.onClick}>{button.text}</button>
            )
          )}
        </div>
      </>
    );
  },
});
