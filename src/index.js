import {createApp} from 'vue/dist/vue.esm-browser.js';
import playerTemplate from './main-template.html';

import buttonEl from './ui/button-el.vue';

const app  =  createApp({
  template: playerTemplate,
  data() {
    return {
      message: 'Hello!'
    }
  },
  components: {
    'button-el': buttonEl
  }
});

app.mount('#app');
