import React from 'react'
import { Route,Switch,Link} from 'react-router-dom';

import Login from './Components/login.jsx'
import Authenticate from './Components/authenticate'
import Dashboard from './Components/dashboard.jsx'

class Routes extends React.Component{
    render(){
        return(
        <div> 
        	{!sessionStorage.getItem('sessionLogin') && <Authenticate>
           		<Route path='/login' component={Login} />
        	</Authenticate>}
       		{sessionStorage.getItem('sessionLogin') &&
       			<Route path='/dashboard' component={Dashboard} />
       		}
        </div>
        )
    }

}

export default Routes;