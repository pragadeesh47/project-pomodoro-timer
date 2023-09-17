import React, { useEffect, useReducer, useState } from 'react'
import Button from './components/Button'
import Timer from './components/Timer'

const initialState = {
    remainingTime : 1500,
    timer : null,
    breaks : false
}

function reducer(state, action){
    switch(action.type){
        case 'start' :
            return {
                ...state,
                timer : 'started',
                remainingTime : state.remainingTime - 1

            }
        case 'started':
            return{
                ...state,
                remainingTime : state.remainingTime - 1
            }
        case 'pause' :
            return {
                ...state,
                timer : 'paused'
            }
        case 'reset' :
            return {
                ...state,
                timer : 'resets',
                remainingTime:1500
            }
        case 'complete':
            return{
                ...state,
                timer : 'completed'
            }
        case 'timer':
            return {
                ...state,
                timer : null,
                remainingTime : 1500,
                breaks : false
            }

        case 'break' : 
        return {
            ...state,
            timer : 'break',
            breaks : true,
            remainingTime : 300
        }
        default :
            return state
    }
}



const Main = () => {
    const [{remainingTime, timer, breaks},dispatch] = useReducer(reducer,initialState)
    const [name,setName] = useState('')
    const [image,setImage] = useState('')
    useEffect(()=>{
        const email = JSON.parse(localStorage.getItem('email'))
        if(email === '' || email === null){
            window.location.href = "/"
        }
        setName(JSON.parse(localStorage.getItem('name')))
        setImage(JSON.parse(localStorage.getItem('image')))

        if(timer === 'started'){
            const timeInterval = setInterval(()=>{
                dispatch({type:'started'})
            },1000)
            return ()=>{
                clearInterval(timeInterval)
            }
        }
    },[timer])
    if(remainingTime<=0){
        // if(timer !== 'completed'){
        //     dispatch({type:'complete'})
        //     dispatch({type:'break'})
        // }
        if(breaks){
            dispatch({type:'timer'})
        }
        else{
            dispatch({type:'break'})
        }
    }
    const handleLogout = 
    () =>{
        localStorage.clear();
        window.location.href = "/";
    }
  return (
    <div>
    <div className='' style={{padding:'10px',display:'flex',alignItems:'center', justifyContent:'space-between',backgroundColor:'#9DB2BF'}}>
    <div style={{display:'flex',alignItems:'center'}}>
    <img style={{width:'50px', height:'50px',borderRadius:'50%',objectFit:'cover'}} src={image} alt=' ' />
    <p style={{fontSize:'24px',fontWeight:'bold'}}>{name}</p>
    </div>
    <button onClick={handleLogout} className='btn'>logout</button>
    </div>
    <hr />
    <div className='appContainer'>
      <div>
        <Button  onClick={()=>{dispatch({type:'timer'})}}>{!breaks ? 'TIMER' : 'timer'}</Button>
        <Button  onClick={()=>{dispatch({type:'break'})}}>{breaks ? 'BREAK' : 'break'}</Button>
        <Timer time = {remainingTime ? remainingTime : 'COMPLETED'}/>
        <Button onClick={()=>{
            if(timer === 'started'){
                dispatch({type :'pause'})
            }
            else{
                dispatch({type:'start'})
            }
        }}>{timer==='started' ? 'pause' : timer=== 'paused' ? 'resume' : 'start'}</Button>
        <Button onClick={()=>{
            if(breaks){
                dispatch({type:'break'})
            }
            else{
                dispatch({type:'timer'})
            }
        }}>reset</Button>
      </div>
    </div>
    </div>
  )
}

export default Main
