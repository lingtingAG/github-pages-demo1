import { defineComponent } from "vue";
import { RouterView } from "vue-router";

export const App = defineComponent({
    setup() {
        return () => <>
            <header>导航</header>
            <ul>
                <li><router-link to="/">Foo</router-link></li>
                <li><router-link to="/about">Bar</router-link></li>
            </ul>
            <div>
                <RouterView></RouterView>
            </div>
            <footer>页脚</footer>
        </>
    }
})