import { defineComponent, PropType, reactive } from 'vue';
import { MainLayout } from '../../layouts/MainLayout';
import { Button } from '../../shared/Button';
import { EmojiSelect } from '../../shared/EmojiSelect';
import { Icon } from '../../shared/Icon';
import { Rules, validate } from '../../shared/validate';
import s from './Tag.module.scss';
import { TagForm } from './TagForm';

export const TagEdit = defineComponent({
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
        default: () => <>
          <TagForm />
          <div class={s.actions} >
            <Button level="danger" class={s.removeTags} onClick={() => {}}>删除标签</Button>
            <Button level="danger" class={s.removeTagsItems} onClick={() => {}}>删除标签和记账</Button>
          </div>
        </>
      }}</MainLayout>
    )
  }
})