import React from 'react'

import './App.css';
import Signin from './pages/Sign-in/sing-in.component';
import Register from './pages/Register/register.component';
import Homepage from './pages/HomePage/homepage.component';


class App extends React.Component{
  constructor(){
    super()
    this.state={
      user:{
        id:"",
        nombre:"",
        apellido:"",
        password:"",
        correo:"",
      },
      route:'signin'
    }
  }

  loadUser=(data)=>{
    this.setState({user:{
      id:data.id,
      nombre:data.nombre,
      apellido: data.apellido,
      correo:data.correo
    }})
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
    const {route,user}=this.state
    return (
      <>

          {
          route==='homepage'?<Homepage usuario={this.state.user}/>
          :
          route==='signin'
          ?
          <Signin onRouteChange={this.onRouteChange} loadUser={this.loadUser}/>
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