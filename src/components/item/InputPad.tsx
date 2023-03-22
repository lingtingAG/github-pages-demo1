import { defineComponent, PropType, ref, computed } from 'vue';
import { Icon } from "../../shared/Icon";
import s from "./InputPad.module.scss";
import { DatePicker, Popup } from "vant";
import { Time } from "../../shared/time";

export const InputPad = defineComponent({
  props: {
    name: {
      type: String as PropType<string>,
    },
  },
  setup: (props, context) => {
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
    const refDate = ref(new Time(new Date()).format().split("-"));
    const refDatePickVisible = ref(false);
    const showNowDate = computed(() => {
      return refDate.value.join("-");
    })
    const showDatePick = () => {
      refDatePickVisible.value = true;
    };
    const hideDatePick = () => {
      refDatePickVisible.value = false;
    };
    return () => (
      <>
        <div class={s.dateAndAmunt}>
          <span class={s.date}>
            <Icon class={s.icon} name="date" />
            <span>
              <span onClick={showDatePick}>{new Time(showNowDate.value).format()}</span>
              <Popup position="bottom" v-model:show={refDatePickVisible.value}>
                <DatePicker
                  v-model={refDate.value}
                  title="选择日期"
                  onConfirm={hideDatePick}
                  onCancel={hideDatePick}
                />
              </Popup>
            </span>
          </span>
          <span class={s.amount}>123.45</span>
        </div>
        <div class={s.buttons}>
          {buttonMap.map((button) => (
            <button onClick={button.onClick}>{button.text}</button>
          ))}
        </div>
      </>
    );
  },
});
