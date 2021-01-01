import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
// layouts
import Basiclayout from '../layouts/BasicLayout.vue';
import UserLayout from '../layouts/UserLayout.vue';
// 登录
import Login from '../views/Login.vue';
// 列表
import CommonList from '../views/dashboard/CommonList/index.vue';
// 详情
import CommonDetail from '../views/dashboard/Detail/index.vue';
// 404
import NotFoundPage from '../components/NotFound.vue';
// components
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
// const
import store from '../store/index';
import { message } from 'ant-design-vue';



const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'basiclayout',
    component: Basiclayout,
    redirect: '/login',
    children: [
      {
        path: '/login',
        name: 'Login',
        component: Login
      }
    ]
  },
  {
    path: '/dashboard',
    name: 'userLayout',
    component: UserLayout,
    redirect: '/dashboard/commonList',
    meta: {
      title: '登录后可查看',
      roles: ['admin', 'kaopuyun'] 
    },
    children: [
      {
        path: '/dashboard/commonList',
        name: 'commonList',
        component: CommonList
      },
      {
        path: '/dashboard/detail/:id',
        name: 'commonDetail',
        component: CommonDetail,
        meta: {
          title: '管理员可查看',
          roles: ['admin'] 
        }
      }
    ]
  },
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: NotFoundPage
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
router.beforeEach((to, from, next)=>{
  NProgress.start();
  if (to.meta.roles) {
    const rolesArr = to.meta.roles as string[];
    const identity = store.state.identity;
    if (rolesArr.indexOf(identity) !== -1) {
      next();
    } else {
      message.error('权限不足');
      next({ path: '/' });
      NProgress.done();
    }
  } else {
    next();
  }
})
router.afterEach(()=>{
  NProgress.done();
})

export default router
