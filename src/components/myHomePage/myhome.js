import React, { useState } from 'react'
import Profile from './Profile'
import '../../styles/myhome.css'
import { FcPortraitMode, FcVoicePresentation, FcOvertime, FcConferenceCall, FcParallelTasks, FcLibrary, FcOnlineSupport, FcPuzzle, FcFeedback, FcReading, FcPrivacy, FcOpenedFolder, FcGraduationCap } from "react-icons/fc";

function MyHome() {
  const tabs = [
    {
      index: 0,
      tabName: "Profile",
      iconComponent: <FcPortraitMode />
    }, {
      index: 1,
      tabName: "Details",
      iconComponent: <FcVoicePresentation />
    }, {
      index: 2,
      tabName: "Skills",
      iconComponent: <FcPuzzle />
    }, {
      index: 3,
      tabName: "Documents",
      iconComponent: <FcOpenedFolder />
    }, {
      index: 4,
      tabName: "Bank",
      iconComponent: <FcLibrary />
    }, {
      index: 5,
      tabName: "Job History",
      iconComponent: <FcOvertime />
    }, {
      index: 6,
      tabName: "References",
      iconComponent: <FcParallelTasks />
    }, {
      index: 7,
      tabName: "Education",
      iconComponent: <FcReading />
    }, {
      index: 8,
      tabName: "Certification",
      iconComponent: <FcGraduationCap />
    }, {
      index: 9,
      tabName: "Family",
      iconComponent: <FcConferenceCall />
    }, {
      index: 10,
      tabName: "Emergency",
      iconComponent: <FcOnlineSupport />
    }, {
      index: 11,
      tabName: "Change Password",
      iconComponent: <FcPrivacy />
    }, {
      index: 12,
      tabName: "Separation Request",
      iconComponent: <FcFeedback />
    }
  ]
  const [index, setIndex] = useState(0);
  const homePageSwap = [<Profile />, "Details", "Skills", "Documents", "Bank"
    , "JobHistory", "References", "Education", "Certification", "Family", "Emergency", "Change Password", "SeparationRequest"];


  return (
    <div className='myhome'>
      <header className='myHomeHeader'><h5>My Home</h5><h4>My Home <span>{'>>'} View and add details</span></h4></header>
      <div className='myHomeBody' >
        <div className='myHomeDashboard'>
          {
            tabs.map((tab) => {
              return <li key={tab.index} className={index === tab.index ? 'linkTrue' : 'linkFalse'} onClick={() => setIndex(tab.index)}>{tab.iconComponent}{tab.tabName}</li>
            })
          }
        </div>
        {/* <div className='myHomeMain'> */}
          {homePageSwap[index]}
        
      </div>
    </div>
  )
}

export default MyHome