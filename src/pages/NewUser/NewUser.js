import { Input } from '@mui/material';
import React from 'react';

import "./NewUser.css"
export default function NewUser() {
  return (
  <div className='newUserWraper'>
  
    <ul className='newUser' >
      <li>
        <span className='newUserData'>Username</span>
        <Input placeholder='Enter new Username' className='newUserInput'></Input>
      </li>
      <li >
        <span className='newUserData'>Status</span>
        <Input placeholder='Enter new Status' className='newUserInput'></Input>
      </li>
      <li>
        <span className='newUserData'>transaction</span>
        <Input placeholder='Enter new Transaction' className='newUserInput'></Input>
      </li>
      <li>
        <span className='newUserData'>Email</span>
        <Input placeholder='Enter new Email' className='newUserInput'></Input>
      </li>

    </ul>
    <div className='newUserBTNs'>
      <button className='newUserBTN'>Insert Photo</button>
      <button className='newUserBTN'>+ Add User</button>

    </div>

    


  </div>)
  
}
