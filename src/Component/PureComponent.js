import React, { Component } from 'react'

export class PureComponent extends Component {
  render() {
    console.log("Pure Good render");
    return (
      
      <div>This is PureComponent file {this.props.name}</div>
    );
    
  }
}

export default PureComponent