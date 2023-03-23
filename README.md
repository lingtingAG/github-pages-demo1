# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).

### ref默认值
推荐使用
```tsx
const div = ref<HTMLDivElement>();
```

不推荐使用
```tsx
const div = ref<HTMLDivElement ｜ null>(null);
```

```javascript
https://unicode.org/emoji/charts/full-emoji-list.html

const result = [];
const trList = document.querySelectorAll('table')[0].querySelectorAll('tr')
Array.from(trList).map(tr => {
  const first = tr.children[0];
  const second = tr.children[1];
  if(first.classList.contains('mediumhead')){
    // console.log(first, '分类');
    result.push([first.textContent])
  }else if(first.classList.contains('rchars')){
    if(first.tagName.toLowerCase() === 'th'){
      // console.log(first, '表头');
    }else{
      const last = result[result.length -1];
      last[1] = last[1] || [];
      last[1].push(second.textContent);
      // console.log(second, '数据');
    }
  }
})
JSON.stringify(result);

// vscode 选择 * 使用正则替换 U\+([0-9a-f]{4,5}) ---> \\u{$1}

```