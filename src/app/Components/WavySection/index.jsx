import React from 'react'
import WavyLineIcon from './WavyLineIcon'
import './WavySection.css'

const index = ({children, color}) => {
  return (
    <div className='wavyline-container'>
        <WavyLineIcon color={color}/>
            <div className='wavyline-text' style={{color: color}}>{children}</div>
        <WavyLineIcon color={color}/>
    </div>

  )
}

export default index;
