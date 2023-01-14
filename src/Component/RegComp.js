import React, { Component } from 'react'

export class RegComp extends Component {
  render() {
    console.log("Reg Good render");
    return (
      
      <div> This is a Regular Component file. {this.props.name}</div>
    )
    }
}

export default RegComp