import React from 'react'

class Authenticate extends React.Component{

	constructor(props){
		super(props)
		this.state={}
		var loginStatusInterval = setInterval(()=>{
	        if(sessionStorage.getItem('sessionLogin')){
	            window.location.href = '/dashboard/searchPage'
	            clearInterval(loginStatusInterval)
	        }
			if(!sessionStorage.getItem('sessionLogin')){
				if(window.location.href.split('/')[3] != 'login'){
		           	window.location.href = '/login'
				}
	        }
    	},250)

	}
	render(){
		return(
			this.props.children
		)
	}
}
export default Authenticate