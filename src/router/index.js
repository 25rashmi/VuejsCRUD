import Vue from 'vue';
import Router from 'vue-router';
import Books from '../components/Books.vue';
import Ping from '../components/Ping.vue';
import Signup from '../components/Signup.vue';
import Login from '../components/Login.vue';
import Header from '../components/Header.vue';
import Add from '../components/Add.vue';
import Update from '../components/Update.vue';
import Home from '../components/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/books',
      name: 'Books',
      component: Books,
    },
    {
      path: '/ping',
      name: 'Ping',
      component: Ping,
    },
    {
      path: '/register',
      name: 'register',
      component: Signup,
    },
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '/header',
      name: 'Header',
      component: Header,
    },
    {
      path: '/add',
      name: 'Add',
      component: Add,
    },
    {
      path: '/update/:id',
      name: 'Update',
      component: Update,
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
  ],
});
