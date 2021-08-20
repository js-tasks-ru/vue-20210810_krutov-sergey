 import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
}

// Требуется создать Vue приложение
const Root = defineComponent({
  name: 'Root',
  data() {
    return {
      radio: '',
      meetupTitle: '',
    };
  },
  watch:{
    radio: function(newValue, oldValue) {
      fetchMeetupById(Number(newValue)).then((result) => {
        this.meetupTitle = result.title;
      }
      );
    }
  },
});

window.vm = createApp(Root).mount('#app');