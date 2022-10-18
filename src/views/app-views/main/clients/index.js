import React from 'react'
import { Route, Switch} from 'react-router-dom';
import ClientsList from './clients-list'
import ClientData from './clients-list/ClientData';

const Clients = props => {
  const { match } = props
	return (
		<Switch>
			<Route path={`${match.url}/clients-list`} component={ClientsList} />
      <Route path={`${match.url}/client-data/:id`} component={ClientData} />
		</Switch>
	)
}

export default Clients