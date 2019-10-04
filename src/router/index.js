import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FileNot from '@/components/filenofound'
// import Index from '@/views/index'
// import Detail from '@/views/detail'
// import About from '@/views/about'
// import Login from '@/views/login'
const Index =()=>import("@/views/index")
const Detail=()=>import("@/views/detail")
const About=()=>import("@/views/about")
const Login=()=>import("@/views/login")
import MyInfo from '@/views/myinfo'
import MyOrder from '@/views/myorder'
import About1 from '@/components/about/about1'
import About2 from '@/components/about/about2'
import About3 from '@/components/about/about3'
import MyCart from '@/components/cart'
Vue.use(Router)

let router = new Router({
  mode:"history",
  linkActiveClass:"is-active",
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      alias:"/doc",
       meta:{
        showHeader:true,
        isLogin:false
      }
    },
    // {
    //   path:"/mycart",
    //   name:"MyCart",
    //   component:MyCart
    // },
     {
      path: '/detail/:gid',
      name: 'Detail',
      component: Detail,
       meta:{
        showHeader:true,
        isLogin:false
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta:{
        showHeader:false,
        isLogin:false
      }
    
    },
     {
      path: '/about',
      name: 'About',
      component: About,
       meta:{
        showHeader:true,
        isLogin:false
      },
      children:[
        {
          path:"",
          component:About1,
          meta:{
            index:0,
            showHeader:true,
            isLogin:false
          }
        },
          {
          path:"two",
          component:About2,
          meta:{
            index:1,
            showHeader:true,
            isLogin:false
          }
        },
          {
          path:"three",
          component:About3,
          meta:{
            index:2,
            showHeader:true,
            isLogin:false
          }
        }

      ]
    },
    {
      path: '/myinfo',
      name: 'MyInfo',
      component: MyInfo,
      meta:{
        showHeader:true,
        isLogin:true
      }
    
    },
     {
      path: '/myorder',
      name: 'MyOrder',
      component: MyOrder,
      meta:{
        showHeader:true,
        isLogin:true
      }
    
    },
    {
      path:'*',
      // component:FileNot
      redirect:(to)=>{
        if(to.path=="/aaa"){
          return "/"
        }else if(to.path=="/bbb"){
          return "/about"
        }else{
          return {name:"About"}
        }
      }
    }
  ]
})
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
//全局路由导航函数
router.beforeEach((to,from,next)=>{
  if(to.meta.isLogin){
    let info = router.app.$local.fetch("user").userName;
    if(info){
      next();
    }else{
      alert("请选登录")
      router.push("/login")
    }
  }else{
    next();
  }
})
export default router;