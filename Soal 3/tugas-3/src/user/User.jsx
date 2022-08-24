import React from 'react';
import{Link, Route, Routes} from 'react-router-dom'
import Profile from './profile/Profile';
import Setting from './setting/Setting';
function User() {
    return (
        <div>
           <h1>user1:Nandito</h1> 

           <Link to="/user/profile">Profile</Link>
            <br />
            <Link to="/user/setting">Setting</Link>
            <br />
            
            <Routes>
                <Route path="/user/profile" element={<Profile/>}/>
                <Route path="/user/setting" element={<Setting/>}/>
              
               
            </Routes>
        </div>
    );
}

export default User;