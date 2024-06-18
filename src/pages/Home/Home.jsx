import React from 'react'
import './home.css'
import Header from '../../components/Header/Header';
import Posts from '../../components/posts/Posts';
import SideBar from '../../components/sidebar/SideBar';

 const Home = () => {
  return (
    <>
        <Header />
        <div className="home">
            <Posts/>
            <SideBar />
    </div>
    </>
  )
}

export default Home;