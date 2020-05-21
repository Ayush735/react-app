import React,{Component} from 'react';

class Wrapper extends Component{
	state={
		count: 0
	};

	//increment
	increment = () =>{
		const count = this.state.count;
		return this.setState({ count: count+1});
	};
	//decrement
	decrement = () =>{
		const count = this.state.count;
		return this.setState({count: count - 1});
	};
	render(){
		const count = this.state.count;
		return(
			<div>{this.props.render({
        increment: this.increment,
        decrement: this.decrement,
        count: count
      })}</div>
		);
	}
}
export default Wrapper;