import { defineComponent, PropType } from "vue";
import { MainLayout } from "../../layouts/MainLayout";
import { Icon } from "../../shared/Icon";
import s from "./ItemCreate.module.scss";

export const ItemCreate = defineComponent({
  props: {
    name: {
      type: String as PropType<string>,
    },
  },
  setup: (props, context) => {
    return () => (
      <MainLayout>
        {{
          title: () => "记一笔",
          icon: () => <Icon name="back" class={s.navIcon} />,
          default: () => (
            <>
              <div class={s.wrapper}>h12312i</div>
            </>
          ),
        }}
      </MainLayout>
    );
  },
});