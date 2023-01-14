import React, { Component } from 'react'
import PureComponent from './PureComponent';
import RegComp from './RegComp';
class ParentComp extends Component {
  constructor(props){
    super(props)

    this.state = {
      name: "Cogent Multitech!"
    }
  }

  componentDidMount(){
    setInterval(()=>{
      this.setState({
        name: "Cogent Multitech"
      })
    }, 3000);
  }
  render() {
    console.log("Good render");
    return (
      <div>This is the ParentComp file
      <RegComp name={this.state.name}/>
      <PureComponent name={this.state.name}/>
      </div>
    )
  }
}

export default ParentComp