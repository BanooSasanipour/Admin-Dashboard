import { useParams} from 'react-router-dom'
import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';

import { userRows } from '../../datas';
import './User.css'

export default function User() {

    let { userID } = useParams();
    const [users] = useState(userRows);
    const user = users.find(user => user.id == Number(userID));

    if (!user) {
        return <p>{userID} dont find</p>;
    }
  
  return (

        <>
        <div className="userWraper">
               <img src={user.avatar} alt="Avatar" className='userPhoto'/>
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
                                <td className='userData'>{user.username}</td>
                                <td className='userData'>{user.email}</td>
                                <td className='userData'>{user.status}</td>
                                <td className='userData'>{user.transaction}</td>
                    
                            </tr>

                    </tbody>
            </Table>
            <div className="btns">
                {/* <button className='userButton'>Edit</button> */}
                <EditIcon style={{color: "green"}} />
                <DeleteOutlineIcon style={{color: "red"}}/>

            </div>
            

        </div>
         
            
            </>
        
)}

