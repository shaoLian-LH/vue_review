import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { Card, Button, Layout, Menu, Table } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.min.css';

createApp(App)
.use(store)
.use(router)
.use(Card)
.use(Button)
.use(Layout)
.use(Menu)
.use(Table)
.mount('#shaolian');
