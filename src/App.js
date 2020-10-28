import React from 'react'

import './App.css';
import Signin from './pages/Sign-in/sing-in.component';
import Register from './pages/Register/register.component';


class App extends React.Component{
  constructor(){
    super()
    this.state={
      user:{
        id:"",
        nombre:"",
        password:"",
        email:"",
        joined:''
      },
      route:'signin'
    }
  }
  
  onRouteChange = (route) =>{
    // if(route==='signout'){
    //   this.setState(initialstate)
    // }else if(route === 'home'){
    //   this.setState({isSignedIn:true})
    // }
    this.setState({route:route});
  }
  

  render(){
    const {route}=this.state
    return (
      <>
          {
          route==='signin'
          ?
          <Signin onRouteChange={this.onRouteChange}/>
          :(
            route==='register'?
            <Register onRouteChange={this.onRouteChange}/>:
            <></>
          )
          }
      </>
    );
  }
}

export default App;