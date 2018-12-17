import VueRouter from 'vue-router';
import Home from './components/home/Home';
import Search from './components/search/Search';

export default new VueRouter({
  // mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/search', component: Search },
    { path: '*', redirect: '/' }
  ]
});