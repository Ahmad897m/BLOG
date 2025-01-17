import React from 'react'
import './settings.css'
import SideBar from '../../components/sidebar/SideBar'

function Settings() {
return (
    <div className='settings'>
        <div className="settingsWrapper">   
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsUpdateTitle">Delete Account</span>
            </div>
            <form className="settingsForm">
                <label>Profile Picture</label>
                <div className="settingsPP">
                    <img 
                    src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600" 
                    alt="" />
                    <label htmlFor="fileInput">
                        <i className="settingsPPIcon far fa-user-circle">  </i>
                    </label>
                    <input type="file" id='fileInput' style={{display: 'none'}} />
                </div>
                <label>Username</label>
                <input type="text" placeholder='Safak' />
                <label>Email</label>
                <input type="email" placeholder='safak@gmail.com' />
                <label>Password</label>
                <input type="password" />
                <button className="settingsSubmit">Update</button>
            </form>
        </div>
            <SideBar />
    </div>
)
}

export default Settings
