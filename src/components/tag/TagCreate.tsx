import { defineComponent, PropType, reactive, toRaw } from 'vue';
import { MainLayout } from '../../layouts/MainLayout';
import { Button } from '../../shared/Button';
import { Icon } from '../../shared/Icon';
import s from './Tag.module.scss';
import { EmojiSelect } from '../../shared/EmojiSelect';
import { Rules, validate, FData } from '../../shared/validate';
import { TagForm } from './TagForm';
export const TagCreate = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    return () => (
      <MainLayout>{{
        title: () => '新建标签',
        icon: () => <Icon name="back" onClick={() => { }} class={s.navIcon}/>,
        default: () => <TagForm />
      }}</MainLayout>
    )
  }
})