import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloDetail from '@/components/HelloDetail'
import HelloList from '@/components/HelloList'
import Heighter from '@/components/Heighter'

Vue.use(Router)

let router = new Router({
  mode: "history", //去掉井号  
  // base:'/base/',
  // linkActiveClass:'',
  // linkExactActiveClass:'',
  // scrollBehavior(to, from, savedPosition) {

  // },//滚动行为
  // parseQuery(query){

  // },
  // stringifyQuery(obj){

  // },
  // fallback: true,
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: () =>
      import ("@/components/HelloWorld"), //路由懒加载写法 需安装 npm i babel-plugin-syntax-dynamic-import -D 修改 babelrc文件 "syntax-dynamic-import
    children: [{
        path: '',
        name: 'HelloDetail',
        component: HelloDetail,
        beforeEnter(to, from, next) { //路由守卫，只有进来这个路由，才会触发
          console.log('app route before enter');
          next()
        }
      },
      {
        path: 'list/:id',
        props: true, //会把id 传到HelloList组件里面去  组件里面看调用方法
        name: 'HelloList',
        component: HelloList
      },
      {
        path: 'heighter',
        name: "heighter",
        component: Heighter
      }
    ]
  }, {
    path: '/router',
    component: () =>
      import ("@/components/Router"),
    children: [{
      path: ':id',
      component: () =>
        import ("@/components/RouterId")
    }]
  }],
})

// 路由守卫
router.beforeEach((to, from, next) => {
  // 数据的校验
  /* 
    if(to.fullPath === '/login'){
      next()
    }else{
      next('/login);
      // 可以和router里面一样
      next({
        path:'/login',
      })
    }
  */
  console.log('to', to);
  console.log('from', from);
  next()
})

router.beforeResolve((to, from, next) => {
  console.log('to', to);
  console.log('from', from);
  next()
})

router.afterEach((to, from) => {
  console.log('to', to);
  console.log('from', from);
})

export default router