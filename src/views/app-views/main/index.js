import React, { lazy, Suspense } from "react";
import { Route, Switch } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';
const Main = ({match}) => {
	return (
    <Suspense fallback={<Loading cover="content"/>}>
    <Switch>
    <Route path={`${match.url}/dashboard`} component={lazy(() => import(`../main/dashboard`))} />
      <Route path={`${match.url}/clients`} component={lazy(() => import(`./clients`))} />
      <Route path={`${match.url}/clients/clients-list`} component={lazy(() => import(`./clients/clients-list`))} />
      <Route path={`${match.url}/planner2d`} component={lazy(() => import(`./planner2D`))} />
      {/* <Route path={`${match.url}/analytic`} component={lazy(() => import(`./analytic`))} /> */}
      {/* <Route path={`${match.url}/sales`} component={lazy(() => import(`./sales`))} /> */}
      {/* <Redirect from={`${match.url}`} to={`${match.url}/default`} /> */}
    </Switch>
  </Suspense>
	)
}

export default Main
