import React from 'react'
import { Redirect, Route, Switch, withRouter } from 'react-router-dom'
import Routers from './routers'
function App () {
  return (
    <Switch>
      {
        Routers.map(router => (
          <Route
            exact={!router.notExect}
            key={router.path}
            path={router.path}
            component={router.component}
          >
          </Route>
        ))
      }
      {/* 设置默认路由 推荐方法一*/}
      {/* 重定向*/}
      <Redirect path="/" to="/home" />
    </Switch>
  )
}

export default withRouter(App)
