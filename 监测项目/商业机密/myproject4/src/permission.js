import router from './router'
import store from './store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css' // Progress 进度条样式
import { getToken } from '@/utils/auth' // 验权
import { Message } from 'element-ui'

NProgress.configure({
  showSpinner: false
}) // NProgress Configuration

// permissiom judge
function hasPermission(roles, permissionRoles) {
  if (roles.indexOf('systemAdministrator') >= 0) return true // admin权限 直接通过
  if (!permissionRoles) return true
  return roles.some(role => permissionRoles.indexOf(role) >= 0)
}

const whiteList = [
  '/login',
  '/authredirect',
  '/updataPassword',
  '/resetPassword',
  '/register',
  '/register/progress',
  '/nologin/list',
  '/nologin/detail',
  '/changeLog',
  '/figureCredential',
  '/figureCredential/onlineFill',
  '/figureCredential/print',
  '/work-flow',
  '/demo-upload'
] // 不重定向白名单

router.beforeEach((to, from, next) => {
  NProgress.start() // 开启Progress
  if (getToken()) {
    // 判断是否有token
    if (to.path === '/login') {
      // next({
      //   path: '/'
      // })
      location.href = window.portalPath
      NProgress.done() // router在hash模式下 手动改变hash 重定向回来 不会触发afterEach 暂时hack方案 ps：history模式下无问题，可删除该行！
    } else {
      if (store.getters.permissions_routers.length === 0) {
        // 判断当前用户是否已拉取完user_info信息
        store
          .dispatch('GetUserInfo')
          .then(res => {
            // 拉取user_info
            const permissions_routers = res.permission_routers
            const system = res.system
            store.dispatch('GenerateRoutes', { permissions_routers, system }).then(() => {
              // 根据roles权限生成可访问的路由表
              // 生成可访问的路由表
              router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
              // router.addRoutes(asyncRouterMap) // 动态添加可访问路由表
              next({ ...to, replace: true }) // hack方法 确保addRoutes已完成 ,replace: true so the navigation will not leave a history record
            })
          })
          .catch(() => {
            store.dispatch('FedLogOut').then(() => {
              Message.error('验证失败,请重新登录')
              // next({
              //   path: '/login'
              // })
              location.href = window.portalPath
              NProgress.done()
            })
          })
      } else {
        // 没有动态改变权限的需求可直接next() 删除下方权限判断 ↓
        if (hasPermission(store.getters.permissions_routers, to.meta.role)) {
          next() //
        } else {
          next({
            path: '/401',
            replace: true,
            query: {
              noGoBack: true
            }
          })
        }
        // 可删 ↑
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      // 在免登录白名单，直接进入
      next()
    } else {
      // next('/login') // 否则全部重定向到登录页
      location.href = window.portalPath
      NProgress.done() // router在hash模式下 手动改变hash 重定向回来 不会触发afterEach 暂时hack方案 ps：history模式下无问题，可删除该行！
    }
  }
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})
