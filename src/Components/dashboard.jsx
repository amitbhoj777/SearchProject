import React from 'react'
import ChildRoutes from './childRoutes.jsx'

class Dashboard extends React.Component{

	constructor(props){
		super(props)
		this.state={}
	}
	logout(){
		sessionStorage.clear()
		window.location.reload()
	}
	render(){
		return(
			<div className='mainContainer'>
				<div className='headerStrip'>Welcome to search page.
					<span className='logout' onClick={()=>this.logout()}>Logout</span>
				</div> 
				<div className='midMainContainer'>
					<ChildRoutes/>
				</div> 
			</div>
		)
	}
}
export default Dashboard