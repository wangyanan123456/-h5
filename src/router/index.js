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
import zhijianxiugai from '@/components/zhijianxiugai'
import wenlist1 from '@/components/wenlist1'
import wenlist2 from '@/components/wenlist2'
import xiugai from '@/components/xiugai'
import wenyanshou from '@/components/wenyanshou'
import wenyanshou2 from '@/components/wenyanshou2'
import jilu from '@/components/jilu'
import jilu2 from '@/components/jilu2'
import jilu3 from '@/components/jilu3'
import jilu4 from '@/components/jilu4'

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
        },
        {
          path: '/wenlist1',
          name: 'wenlist1',
          component: wenlist1
        },
        {
          path: '/jilu',
          name: 'jilu',
          component: jilu
        },
         {
          path: '/jilu2',
          name: 'jilu2',
          component: jilu2
        },
        {
          path: '/jilu3',
          name: 'jilu3',
          component: jilu3
        },
         {
          path: '/jilu4',
          name: 'jilu4',
          component: jilu4
        },
        
        
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
    {
      path: '/zhijianxiugai',
      name: 'zhijianxiugai',
      component: zhijianxiugai
    },
    {
      path: '/wenlist2',
      name: 'wenlist2',
      component: wenlist2
    },
    {
      path: '/xiugai',
      name: 'xiugai',
      component: xiugai
    },
    {
      path: '/wenyanshou',
      name: 'wenyanshou',
      component: wenyanshou
    },
    {
      path: '/wenyanshou2',
      name: 'wenyanshou2',
      component: wenyanshou2
    }
    
  ]
})
