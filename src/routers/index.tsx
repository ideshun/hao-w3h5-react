import { lazy } from 'react' // 路由懒加载
const Home = lazy(() => import ('../pages/home'))
const Detail = lazy(() => import ('../pages/detail'))

export type RouterType = {
  path: string,
  component: React.LazyExoticComponent<any>,
  root: string[],
  notExect?: boolean,
}[]

const Routers: RouterType = [{
  path: '/home',
  component: Home,
  root: [],
},{
  path: '/detail',
  component: Detail,
  root: [],
},]

export default Routers
