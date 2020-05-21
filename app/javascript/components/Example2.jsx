import React from 'react';
import axios from "axios";
class Example2 extends React.Component{
	state={  
		isLoading: true,
    error: null,
    list: []
	}

	fetchData(){
		axios.get(this.props.link).then(response=>{
			this.setState({
				list: response.data,
				isLoading: false
			});
		}).catch(error=> this.setState({error, isLoading: false  }));	
	}

	// lifecycle method
  componentDidMount() {
    this.setState({ isLoading: true }, this.fetchData);
  }
  render() {
    return this.props.render(this.state);
  }

}
export default Example2;
