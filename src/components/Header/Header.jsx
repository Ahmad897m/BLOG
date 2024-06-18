import React from "react";
import './header.css'

const Header = () => {
    return (
        <div className="header">
                <div className="headerTitles">
                    <span className="headerTilteSm">React & Node</span>
                    <span className="headerTilteLg">Blog</span>
                </div>
                <img src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="headerImg" />
        </div>
    )
}


export default Header;