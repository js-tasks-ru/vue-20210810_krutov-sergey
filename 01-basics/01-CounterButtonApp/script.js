import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

var counter = 0;

// Создайте Vue приложение
const Root = defineComponent({
    name: 'Root',
    data() {
        return {
            counter,
        };
    },
});

const app = createApp(Root).mount('#app');

