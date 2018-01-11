import Vue from 'vue'
import Router from 'vue-router'
import jobTai from '@/components/jobTai'
import zhijian from '@/components/zhijian'
import zhijians from '@/components/zhijians'
import zhijian2 from '@/components/zhijia2'
import zhijian3 from '@/components/zhijian3'
import zhijian4 from '@/components/zhijian4'
import check from '@/components/check'
import yanshou from '@/components/yanshou'
import problem from '@/components/problem'
import yanshou2 from '@/components/yanshou2'

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
        {
          path:'/zhijian4',
          name:'zhijian4',
          component:zhijian4
        }
        
      ]

    },
     {
      path: '/check',
      name: 'check',
      component: check
    },
     {
      path: '/yanshou',
      name: 'yanshou',
      component: yanshou
    },
    {
      path: '/problem',
      name: 'problem',
      component: problem
    },
     {
      path: '/yanshou2',
      name: 'yanshou2',
      component: yanshou2
    },
  ]
})
