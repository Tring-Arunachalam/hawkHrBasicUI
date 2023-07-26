import React,{useState} from 'react'
import "../styles/dashboard.css";
import {Link} from 'react-router-dom'
import { BsSpeedometer2,BsFillAlarmFill,BsCoin,BsCreditCardFill,BsHouseFill,BsPersonFillAdd,BsFillCalendarEventFill,BsFillCalendar2WeekFill,BsFillChatTextFill } from "react-icons/bs";
import { BiBook,BiEdit } from "react-icons/bi";
import { FaHourglassHalf } from "react-icons/fa";
import { CgStopwatch } from "react-icons/cg";
import { SiDeezer } from "react-icons/si";
import { SlUser } from "react-icons/sl";

function Dashboard() {
  const [swapComponent,setSwapComponent]=useState(0);
  const tabs=[
    {
      index:0,
      path:'/',
      icons:<BsSpeedometer2 />,
      label: 'Dashboard'
    },{
      index:1,
      path:'/myhome',
      icons:<BsHouseFill />,
      label:'My Home'
    },{
      index:2,
      path:'/',
      icons:<BsFillAlarmFill />,
      label:'Attendance'
    },{
      index:3,
      path:'/',
      icons:<BsPersonFillAdd />,
      label:'Leaves'
    },{
      index:4,
      path:'/',
      icons:<BsCreditCardFill />,
      label:'Expense'
    },{
      index:5,
      path:'/',
      icons:<BsCoin />,
      label:'Compensation'
    },{
      index:6,
      path:'/',
      icons:<BsFillChatTextFill />,
      label:'Helpdesk'
    },{
      index:7,
      path:'/',
      icons:<SiDeezer />,
      label:'Assets'
    },{
      index:8,
      path:'/',
      icons:<BsFillCalendar2WeekFill />,
      label:'Time Sheet'
    },{
      index:9,
      path:'/',
      icons:<FaHourglassHalf />,
      label:'Lets Achieve'
    },{
      index:10,
      path:'/',
      icons:<SlUser />,
      label:'Training'
    },{
      index:11,
      path:'/',
      icons:<BiEdit />,
      label:'Forms'
    },{
      index:12,
      path:'/',
      icons:<BiBook />,
      label:'Policies'
    },{
      index:13,
      path:'/',
      icons:<BsFillCalendarEventFill />,
      label:'Calendar'
    },{
      index:14,
      path:'/',
      icons:<CgStopwatch />,
      label:'Timeline'
    }
  ]
  return (
    <ul className='dashboard'>
      {tabs.map((val)=>{
        return <Link key={val.index} className={val.index===swapComponent?'linkTagTrue':'linkTagFalse'} onClick={()=>setSwapComponent(val.index)} to={val.path}>{val.icons}{val.label}</Link>
      })}
      <li className='linkTag'><img src='https://tringapps.hawkhr.com/images/Google_Play_Store_logo.png'  alt='playstore' width={180}/></li>
      <li className='linkTag'><img src='https://tringapps.hawkhr.com/images/Apple_Store_Logo.png' alt='apple store' width={180} /></li>
      
    </ul>
  )
}

export default Dashboard