import React from 'react';

class Ccomponent extends React.Component {
    render(){
        return (
        <div> This is from Class Component :: {this.props.name}</div>
        )
    }
}

export default Ccomponent;