import { ref } from "vue";
import { defineComponent } from "vue";

export const Bar = defineComponent({
    setup() {
        const refCount = ref(0);
        const onClick = () => {
            refCount.value += 1;
        }
        return () => <>
            <div>
                {refCount.value}Bar
            </div>
            <div>
                <button onClick={onClick}>+1</button>
            </div>
        </>
    }
})