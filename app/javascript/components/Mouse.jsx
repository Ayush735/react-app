import React from 'react';

class Cat extends React.Component{
  render(){
    const mouse = this.props.mouse;
    return(
      <img src="https://picsum.photos/id/237/200/300" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
    )
  }
}

class MouseTracker extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }
  render() {
    return (
      <div onMouseMove={this.handleMouseMove}>
        <Cat mouse={this.state} />
        <p>The current mouse position is ({this.state.x}, {this.state.y})</p>
      </div>
    );
  }
}

class Mouse extends React.Component {
  render() {
    return (
      <div>
        <h1>Move the mouse around!</h1>
        <MouseTracker />
      </div>
    );
  }
}

export default Mouse;