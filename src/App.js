import React from 'react';
import './App.css';
import { connect } from "react-redux";
import  { updateuser }  from "./dispatch/updateuser"

class App extends React.Component {
  state={
    count:0
  }

  onupdate=(e)=>{
    this.setState({
      count:this.state.count+1
    })
    this.props.onupdate(e.target.value)
  }

  render(){
    console.log(JSON.stringify(this.props)+"props")
    return (
      <div className="App">
      hai
      <input onChange={this.onupdate}/>
      {this.props.two}
      </div>
    )
  }
}

const mapStateToProps=state=>({
  one:state.firstuser,
  two:state.seconduser
})

const mapActionsToProps=({
 onupdate:updateuser
})


export default connect(mapStateToProps,mapActionsToProps)(App);
