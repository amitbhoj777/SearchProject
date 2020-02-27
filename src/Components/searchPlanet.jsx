import React from 'react'

class SearchPage extends React.Component{
	constructor(props){
		super(props)
		this.state={
			planets:[]
		}
	}
	componentDidMount(){
		fetch("https://swapi.co/api/planets/")
      	.then(res => res.json())
      	.then(res => this.setState({ planets: res }))
      	.catch(() => this.setState({ hasErrors: true }));
	}
	sortArrayListByKey(array, key){
	    return array.sort(function(a, b) {
	        let x = a[key];
	        let y = b[key];
	        if(x !='unknown'){
	        	x = JSON.parse(x)
	        }else{
	        	x = 0
	        }
	        if(y !='unknown'){
	        	y = JSON.parse(y)
	        }else{
	        	y = 0
	        }
	        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
	    });
	}
	showPlanetList(){
		let planets = this.state.planets && this.state.planets.results || []
		let planetsData	
			if(planets.length>0){
				planets = this.sortArrayListByKey(planets,'population')
				planetsData = planets.map((obj,index)=>{
					return(
						<li style={{fontSize:`${index+10}px`}} key={index}>
							<span>{obj.name}</span>
							<span>{obj.population}</span>
						</li>
					)
				})
			}else{
				planetsData = [<>No Data Found. Please try with some other filter.</>]
			}
		return planetsData
	}
	onChangeInputs(e){
		this.setState({
			showLoader:true
		})
		fetch(`https://swapi.co/api/planets/?search=${e.target.value}`)
      	.then(response => response.json())
      	.then(response => this.setState({ planets: response,showLoader:false }))
      	.catch(() => this.setState({ hasErrors: true,showLoader:false }));
	}
    render(){
        return(
        <div id='SearchPage' class='searchPlanet'> 
        	<div class='filterArea'>
		  		<label>Search Planet:<input type="text" placeholder='Search' name="searchPlanet" onChange={(e)=>this.onChangeInputs(e)}/></label>
        	</div>
        	<ul>
        		{!this.state.showLoader && this.showPlanetList()}
        		{this.state.showLoader && <span>Loading...</span>}
        	</ul>
        </div>
        )
    }

}

export default SearchPage;