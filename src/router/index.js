import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '../pages/index.vue'
import shopping_cart from '../pages/shopping_cart.vue'
import shop from '../pages/shop.vue'
import my from '../pages/my.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
		 {
		  path: '/shop',
		  name: 'shop',
		  component: shop
		},
		 {
		  path: '/shopping_cart',
		  name: 'shopping_cart',
		  component: shopping_cart
		},
		{
		  path: '/my',
		  name: 'my',
		  component: my
		}
  ]
})
