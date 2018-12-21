import VueRouter from 'vue-router';
import Home from './components/home/Home';
import Jokes from './components/search/Jokes';
import MySet from './components/myset/MySet';
import Ratings from './components/rating/Ratings';
import About from './components/about/About';

export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/search', component: Jokes },
    { path: '/myset', component: MySet },
    { path: '/ratings', component: Ratings },
    { path: '/about', component: About },
    { path: '*', redirect: '/' }
  ]
});