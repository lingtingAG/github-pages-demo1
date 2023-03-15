import { defineComponent, ref, Transition, VNode, watchEffect } from 'vue';
import { RouteLocationNormalizedLoaded, RouterView, useRoute, useRouter } from 'vue-router';
import s from './Welcome.module.scss'
import { useSwipe } from '../hooks/useSwipe';
import { throttle } from '../shared/throttle';

export const Welcome = defineComponent({
  setup: (props, context) => {
    const main = ref<HTMLElement>();
    const route = useRoute();
    const router = useRouter();
    const push = throttle(() => {
      console.log(111);
      if (route.name === 'welcome1') {
        router.push('/welcome/2');
      } else if (route.name === 'welcome2') {
        router.push('/welcome/3');
      } else if (route.name === 'welcome3') {
        router.push('/welcome/4');
      } else if (route.name === 'welcome4') {
        router.push('/start');
      }
    }, 500)
    const { direction, swiping } = useSwipe(main, {
      beforeStart: e => e.preventDefault(),
    })
    watchEffect(() => {
      if (swiping.value && direction.value === 'left') {
        push();
      }
    })
    return () => <div class={s.wrapper}>
      <header>
        <svg>
          <use xlinkHref='#logo'></use>
        </svg>
        <h1>山竹记账</h1>
      </header>
      <main class={s.main} ref={main}>
        <RouterView name="main">
          {/* 解构 + 类型定义 + 传参 */}
          {({ Component: X, route: R }: { Component: VNode, route: RouteLocationNormalizedLoaded }) =>
            <Transition
              enterFromClass={s.slide_fade_enter_from}
              enterActiveClass={s.slide_fade_enter_active}
              leaveToClass={s.slide_fade_leave_to}
              leaveActiveClass={s.slide_fade_leave_active}>
              {X}
            </Transition>
          }
        </RouterView>
      </main>
      <footer>
        <RouterView name="footer" />
      </footer>
    </div>
  }
})