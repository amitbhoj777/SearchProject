import React from 'react'

class DynamicForm extends React.Component{
	constructor(props){
		super(props)
		let inputFieldsArray = [
				{label:'Name',type:'text',name:'name'},
				{label:'Email',type:'text',name:'email'},
				{label:'Gender',type:'text',name:'gender'}
			]
		this.state={
			inputFieldsArray:inputFieldsArray
			}
	}
	submit(event){
		event.preventDefault();
		this.setState({
			showFormData:true
		})
	}
	addFields(e){
		e.preventDefault()
		let inputFieldsArray = this.state.inputFieldsArray
			inputFieldsArray.push({label:this.state.formData.inputFieldType,type:'text',name:this.state.formData.inputFieldType})
		this.setState({
			inputFieldsArray
		})
	}
	onChangeInputs(e,KeyType){
		let formData = this.state.formData || {}
			formData[KeyType] = e.target.value
		this.setState({
			formData:formData
		})
	}

	dynamicFields(){
		let inputFieldsArray = this.state.inputFieldsArray
		let newFields = inputFieldsArray.map((value,index)=>{
			return(
				<label key={index}>{value.label}
					<input type={value.type} name={value.name} onBlur={(e)=>this.onChangeInputs(e,value.name)}/>
				</label>
				)
		})
		return newFields
	}
	showFormDataFunction(){
		let formData = this.state.formData
		return this.showProps(formData,'formData')
	}
	showProps(obj, objName) {
	   	var result = "";
	   	for (var i in obj) {
	     	if (obj.hasOwnProperty(i)) {
	        	result += objName + "." + i + " = " + obj[i] + "\n";
	     	}
	   	}
	   	return result;
	 }
	render(){
		console.log(this.state.formData,'kkkkkkkkkkkkkkkk')
		return(
			<div>
				DynamicForm
				<form onSubmit={this.submit}>
					{this.dynamicFields()}
					<br/>
				  	<label>Add input Fields<input type="text" name="addFields" onBlur={(e)=>this.onChangeInputs(e,'inputFieldType')}/></label>
				  	<button type="button" onClick={(e)=>this.addFields(e)} >Add</button>
				  	<br/>
				  	<button type="button" onClick={(e)=>this.submit(e)} >Submit</button>
				</form>
				<label>Form Data:- </label>
				{this.state.showFormData && this.showFormDataFunction()}
			</div>
		)
	}
}
export default DynamicForm