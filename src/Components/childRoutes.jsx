import React from 'react'
import { Route,Switch,Link} from 'react-router-dom';

import SearchPage from './searchPlanet.jsx'

class ChildRoutes extends React.Component{
    render(){
        return(
        <div> 
     		<Route path='/dashboard/searchPage' component={SearchPage} />
        </div>
        )
    }

}

export default ChildRoutes;