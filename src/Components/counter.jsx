import React from 'react';

class Counter extends React.Component {

  state ={
    count: 0
  }

  increment = () => {
    this.setState({
        count: this.state.count + 1
    });
  }

  decrement = () => {
    this.setState({
      count: this.state.count -1 
    })
  }

  reset = () => {
    this.setState({
      count:0
    })
  }

  render() { 
    return (
      <div> 
        <button style={{marginTop:'10px',borderColor:'Grey',marginLeft:'10px'}} onClick={this.increment}> + </button>
        <button style={{marginTop:'10px',borderColor:'Grey',marginLeft:'10px'}} onClick={this.decrement}> - </button>
        <button style={{marginTop:'10px',borderColor:'Grey',marginLeft:'10px'}} onClick={this.reset}> Reset </button>
        <span> {this.state.count} </span>
      </div>
    )
  } 
}

export default Counter;