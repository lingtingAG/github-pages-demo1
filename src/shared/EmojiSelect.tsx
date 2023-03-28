import { defineComponent, PropType, ref, computed } from "vue";
import s from "./EmojiSelect.module.scss";
import { emojiList } from './emojiList';
export const EmojiSelect = defineComponent({
  props: {
    modelValue: {
      type: String as PropType<string>,
    },
    onUpdateModelValue: {
      type: Function as PropType<(emoji: string) => void>
    }
  },
  setup: (props, context) => {
    const refSelect = ref(0);
    const table: [string, string[]][] = [
      ['表情', ['face-smiling', 'face-affection', 'face-tongue', 'face-hand',
        'face-neutral-skeptical', 'face-sleepy', 'face-unwell', 'face-hat',
        'face-glasses', 'face-concerned', 'face-negative', 'face-costume'
      ]],
      ['手势', ['hand-fingers-open', 'hand-fingers-partial', 'hand-single-finger',
        'hand-fingers-closed', 'hands', 'hand-prop', 'body-parts']],
      ['人物', ['person', 'person-gesture', 'person-role', 'person-fantasy',
        'person-activity', 'person-sport', 'person-resting']],
      ['衣服', ['clothing']],
      ['动物', ['cat-face', 'monkey-face', 'animal-mammal', 'animal-bird',
        'animal-amphibian', 'animal-reptile', 'animal-marine', 'animal-bug']],
      ['植物', ['plant-flower', 'plant-other']],
      ['自然', ['sky & weather', 'science']],
      ['食物', [
        'food-fruit', 'food-vegetable', 'food-prepared', 'food-asian',
        'food-marine', 'food-sweet'
      ]],
      ['运动', ['sport', 'game']],
    ]
    const onClick = (index: number) => {
      refSelect.value = index;
    }
    const onClickEmoji = (emoji: string) => {
      if (props.onUpdateModelValue) {
        props.onUpdateModelValue(emoji)
      } else {
        context.emit('update:modelValue', emoji)
      }
    }
    const emojis = computed(() => {
      const selectedItem = table[refSelect.value][1];
      return selectedItem.map(category =>
        emojiList.find(item => item[0] === category)?.[1].map(
          emoji => <li  onClick={() => onClickEmoji(emoji)} class={emoji === props.modelValue ? s.selectedEmoji : ''}>{emoji}</li>
        )
      )
    })
    return () => (
      <div class={s.emojiList}>
        <nav>
          {table.map((item, index) => <span class={index === refSelect.value ? s.selected : ""} onClick={()=>onClick(index)}>{item[0]}</span>)}
        </nav>
        <ol>
          {emojis.value}
        </ol>
      </div>
    );
  },
});
