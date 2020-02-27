import React from 'react'
import '../App.css';

class Login extends React.Component{
	constructor(props){
		super(props)
		this.state={
			formData:{},
			showErrorMessage:false
		}
	}
	
	submit(event){
		let userData = (this.state.peoples && this.state.peoples.results && this.state.peoples.results[0]) || {name:'!@#$%',birth_year:'%^&*'}
		if(this.state.formData && this.state.formData.username && this.state.formData.password && userData && userData.name){
			if( (this.state.formData.username.toLowerCase() == userData.name.toLowerCase()) && (this.state.formData.password.toLowerCase() == userData.birth_year.toLowerCase()) ){
				sessionStorage.setItem('sessionLogin',true)
			}else{
				this.setState({showErrorMessage:true})
				setTimeout(()=>{ this.setState({showErrorMessage:false}) },2000)
			}
		}
	}
	onChangeInputs(e,KeyType){
		if(KeyType == 'username'){
			fetch(`https://swapi.co/api/people/?search=${e.target.value}`)
	      	.then(res => res.json())
	      	.then(res => this.setState({ peoples: res }))
	      	.catch(() => this.setState({ error: true }));
		}
		let formData = this.state.formData
			formData[KeyType] = e.target.value
		this.setState({
			formData:formData
		})
	}
	render(){
		return(
			<div className='App-header'>
				<div class='loginContainer'>
					<span className='loginHeadTxt'>Welcome!</span>
					<div className='loginTab'> 
						<form  className='formCont' onSubmit={this.submit}>
						  	<label>Username:<input type="text" name="username" onChange={(e)=>this.onChangeInputs(e,'username')}/></label>
						  	<label>Password:<input type="text" name="password" onBlur={(e)=>this.onChangeInputs(e,'password')}/></label>
						  	<button className='buttonClass' type="button" onClick={(e)=>this.submit(e)} >Log In</button>
						</form>
						{this.state.showErrorMessage&& <span class='errorMes'>Invalid Credentials !!!</span>}
					</div>
				</div>
			</div>
		)
	}
}
export default Login