import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Login from "@/views/Login.vue"
// import Dashboard from "@components/Dashboard.vue"
Vue.use(VueRouter)
// 重写push方法
let originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function(location){
  return originalPush.call(this,location).catch((err)=>{
    console.log(err);
  })
}
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "dashboard" */ '../components/Dashboard.vue'),
    children:[
      {
        path:"",
        component:()=>import("../components/Home"),
        meta:[{name:"首页",to:"/dashboard"}]
      },
      {
        path:"/shoplist",
        component:()=>import("../components/ShopList"),
        meta:[{name:"首页",to:"/dashboard"},{name:"数据管理",to:""},{name:"商家列表",to:""}]
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
