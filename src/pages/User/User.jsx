import { useParams} from 'react-router-dom'
import { useState } from 'react';
import Table from 'react-bootstrap/Table';

import { userRows } from '../../datas';
import './User.css'

export default function User() {

    let params = useParams()
    const [users] = useState(userRows)
  
  return (

        <>

        <img src={users.find (user => user.id == params.userID ).avatar} alt="Avatar" className='userPhoto'/>
            <Table striped bordered hover className='userTabel'>
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Transaction</th>
                    </tr>
                </thead>
                
                <tbody>
                           <tr>
                                <td className='userData'>{users.find (user => user.id == params.userID ).username}</td>
                                <td className='userData'>{users.find (user => user.id == params.userID ).email}</td>
                                <td className='userData'>{users.find (user => user.id == params.userID ).status}</td>
                                <td className='userData'>{users.find (user => user.id == params.userID ).transaction}</td>
                    
                            </tr>

                    </tbody>
            </Table>
        <br></br>
            <button className='userButton'>Edit</button>
            </>
        
)}

