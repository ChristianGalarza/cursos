import React from 'react'
import Lottie from 'react-lottie'

import animationData from '../../assets/lotties/signin'
import './sign-in.styles.scss'


class Signin extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            isStopped:true,
            signedEmail:'',
            signedPassword:''
        }
    }

    
    
    onemailChange=(e)=>{
        this.setState({signedEmail:e.target.value})
        console.log(e.target.value);
    }
    onpasswordChange=(e)=>{
        this.setState({signedPassword:e.target.value})
    }

    //animacion hover para el lottie
    animate=()=>{
        this.setState({isStopped:true})
    }
    stop=()=>{
        this.setState({isStopped:false})
    }

    render(){
        const defaultOptions = {
            loop: false,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice"
            }
        };

        return (
            <div className='signin'>
                <div className='signin-box'>
                    <div onMouseOver={this.animate}
                         onMouseLeave={this.stop}
                         className='signin-icon'
                    >
                        <Lottie 
                            options={defaultOptions}
                            isStopped={this.state.isStopped}
                            height={200}
                            width={200}
                        />
                    </div>
                    <div className='signin-form'>
                        <div className='signin-input'>
                            <input className='input-mail' placeholder='Correo Electrónico' type="email" name="email" id="email" onChange={this.onemailChange}/>
                            <label htmlFor="email" className='email-label'>Correo Electrónico</label>
                        </div>
                        <div className='signin-input'>
                            <input className='input-pass' placeholder='Constraseña' type="password" name="password" id="password" onChange={this.onpasswordChange}/>
                            <label htmlFor="password" className='pass-label'>Constraseña</label>
                        </div>
                        <div className='signin-input'>
                            <input className="input-btn" type="submit" value="Iniciar Sesión" onClick={()=>{alert('hola')}}/>
                        </div>
                        <div className='signin-input'>
                            <p className='register-txt'>¿No tienes una cuenta? <span className='txt-span' onClick={()=>this.props.onRouteChange('register')}>Registrate</span></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signin