import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение
const Root = defineComponent({
    name: 'Root',
    data() {
        return {
            a: 2,
            b: 3,
            radio: 'multiply',
        };
    },
    computed: {
        result: function() {
            switch (this.radio){
                case 'sum':
                    return this.a + this.b;
                case 'subtract':
                    return this.a - this.b;
                case 'multiply':
                    return this.a * this.b;
                case 'divide':
                    return this.a / this.b;
                default:
                    return 'Ошибка вычисления!';
            }
        }
    },
});

const app = createApp(Root).mount('#app');