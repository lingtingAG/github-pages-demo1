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
    const appendText = (text: number | string) => {
      refAmount.value += text;
    };
    const buttonMap = [
      { text: '1', onClick: () => { appendText(1) } },
      { text: '2', onClick: () => { appendText(2) } },
      { text: '3', onClick: () => { appendText(3) } },
      { text: '4', onClick: () => { appendText(4) } },
      { text: '5', onClick: () => { appendText(5) } },
      { text: '6', onClick: () => { appendText(6) } },
      { text: '7', onClick: () => { appendText(7) } },
      { text: '8', onClick: () => { appendText(8) } },
      { text: '9', onClick: () => { appendText(9) } },
      { text: '.', onClick: () => { appendText('.') } },
      { text: '0', onClick: () => { appendText(0) } },
      { text: '清空', onClick: () => { refAmount.value = '0' } },
      { text: "提交", onClick: () => {appendText('')} },
    ];
    const refDate = ref(new Time(new Date()).format().split("-"));
    const showNowDate = computed(() => {
      return refDate.value.join("-");
    })
    const refDatePickVisible = ref(false);
    const refAmount = ref("");
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
          {
            refAmount.value === "" ? <span class={s.amount_input}>{ '请输入金额' }</span> : <span class={s.amount}>{ refAmount.value }</span>
          }
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
