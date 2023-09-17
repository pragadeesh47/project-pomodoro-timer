import React, { useEffect } from 'react'

const Timer = ({time}) => {
    if(time !== 'COMPLETED'){
      const min = Math.floor(time / 60) >= 10 ? Math.floor(time / 60) : '0' + Math.floor(time / 60)
      const sec = Math.floor(time % 60) >= 10 ? Math.floor(time % 60) : '0' + Math.floor(time % 60)
      time = min + ':' + sec
    }
  return (
    <div className = 'timerContainer'>
      <p className={`${time === 'COMPLETED' ? 'completed' : 'notCompleted'}`}>{time}</p>
    </div>
  )
}

export default Timer




