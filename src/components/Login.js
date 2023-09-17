import React, { useEffect } from 'react'
import {auth, provider} from "../config.js"
import {signInWithPopup} from "firebase/auth"

const Login = () => {
    // const [value, setValue] = useState('');
    const handleLogin = ()=>{
        signInWithPopup(auth, provider).then((data)=>{
            // setValue(data.user.email)
            console.log(data)
            localStorage.setItem('email',JSON.stringify(data.user.email))
            localStorage.setItem('name',JSON.stringify(data.user.displayName))
            localStorage.setItem('image',JSON.stringify(data.user.photoURL))
            window.location.href = '/home'
        })
    }
    useEffect(()=>{
      const email = JSON.parse(localStorage.getItem('name'))
      if(email === '' || email === null){
    }
    else{
      window.location.href = "/home"

    }
    },[])
  return (
    <div>
    <h3>
      POMODORO TIMER

    </h3>
      <button className='btn' onClick={handleLogin}>login with google</button>
    </div>
  )
}

export default Login
