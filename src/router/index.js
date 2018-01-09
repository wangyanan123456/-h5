import Vue from 'vue'
import Router from 'vue-router'
import jobTai from '@/components/jobTai'
import zhijian from '@/components/zhijian'
import zhijians from '@/components/zhijians'
import zhijian2 from '@/components/zhijia2'
import zhijian3 from '@/components/zhijian3'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'jobTai',
      component: jobTai
    },
    {
	  path: '/zhijian',
      name: 'zhijian',
      component: zhijian,
      children:[
      	{
      		path:'/',
      		name:'zhijian2',
      		component:zhijian2
      	},
      	{
      		path:'/zhijian3',
      		name:'zhijian3',
      		component:zhijian3
      	},
      ]

    }
  ]
})
