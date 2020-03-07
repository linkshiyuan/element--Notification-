import Vue from 'vue';
import {
  Button, Input, Row, Col, Container, Header, Footer, Aside, Main, Notification,
} from 'element-ui';

Vue.use(Button).use(Input);
Vue.use(Row).use(Col);
Vue.use(Container).use(Header);
Vue.use(Footer).use(Aside).use(Main).use(Notification);

Vue.prototype.$notify = Notification;
