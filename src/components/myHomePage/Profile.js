import React from 'react'
import PieCharts from './PieCharts'
import '../../styles/Profile.css'
import { BsFillPenFill,BsPerson,BsPersonFill,BsPersonFillExclamation } from "react-icons/bs";
import { AiFillMail,AiFillPhone,AiFillCalendar,AiFillClockCircle } from "react-icons/ai";

function Profile() {
  return (
    <div className='Profile'>
      <header>
        <img src='https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png' alt='profile_Image'></img>
        <div className='profileHeaderName'>ARUNACHALAM MUTHUVEL (TRL748)</div>
        <div className='profileHeaderJobDescription'>Software Trainee<span> Fresher Trainee</span></div>
      </header> 
      <div className='profileComplete'>
        <div className='profileCompleteHead'>
          <span><BsFillPenFill />Profile Complete</span>
          <div><PieCharts/></div>
        </div>
        <div className='profileCompleteBody'>
          <li>Documents</li>
          <li>Bank Details</li>
          <li>Job History</li>
          <li>Education Qualification</li>
          <li>Certification</li>
          <li>Family</li>
          <li>Emergency Contact</li>
        </div>
      </div>
      <div className='profileDetails'>
        <table>
          <tr>
            <td><BsPerson /></td>
            <td>Code</td>
            <td>TRL748</td>
          </tr>
          <tr>
            <td><AiFillMail /></td>
            <td>Email</td>
            <td>arunachalam.muthuvel@tringapps.com</td>
          </tr>
          <tr>
            <td><AiFillPhone /></td>
            <td>Phone</td>
            <td>+91 6374181787</td>
          </tr>
          <tr>
            <td><BsPersonFill /></td>
            <td>Reporting Manager</td>
            <td>KRISHNA G</td>
          </tr>
          <tr>
            <td><BsPersonFill/></td>
            <td>Dotted Manager</td>
            <td>KRISHNA G</td>
          </tr>
          <tr>
            <td><AiFillCalendar /></td>
            <td>Date of Joining</td>
            <td>Jan 18, 2023</td>
          </tr>
          <tr>
            <td><BsPersonFillExclamation /></td>
            <td>Employment Type</td>
            <td>Full Time Permanent</td>
          </tr>
          <tr>
            <td><BsPersonFillExclamation/></td>
            <td>Service Status</td>
            <td>Probation</td>
          </tr>
          <tr>
            <td><AiFillClockCircle /></td>
            <td>Shift</td>
            <td>Morning Shift-01, 09:30 AM - 06:30 PM</td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Profile