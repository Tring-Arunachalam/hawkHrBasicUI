import React from 'react'
import  "../styles/header.css";
import { BsPersonFillAdd } from "react-icons/bs";
import { FcBusinessman } from "react-icons/fc";

function header() {
  return (
    <div className='header'>
        <div className='hawkhrimg'><img src='https://tringapps.hawkhr.com/images/logo-light.png' alt='HawkHr' /></div>
        <div>TRINGAPPS RESEARCH LABS PRIVATE LIMITED</div>
        <div>search icons</div>
        <div className='timeInOut'>
            <button>Time in</button>
            <span className='headerTiming'>Last In : 9.30 Am</span>
            <span className='headerAccountIcon'><BsPersonFillAdd /></span>
        </div>
        <div className='headerProfileDetails'><FcBusinessman />Arunachalam</div>
    </div>
  )
}

export default header