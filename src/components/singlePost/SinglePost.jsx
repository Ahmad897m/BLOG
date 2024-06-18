import React from 'react'
import './singlePost.css'

function SinglePost() {
    return (
    <div className='singlePost'>   
        <div className="singlePostWrapper">
            <img src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600" alt=""  className='singlePostImg'/>
            <h1 className="singlePostTitle">
                lorem ipsum dolor sit amet.
                <div className="singlePostEdit">
                    <i className="singlePostIcon far fa-edit"></i>
                    <i className="singlePostIcon far fa-trash-alt"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className='singlePostAuthor' > Autor: <b>Safak</b></span>
                <span className='singlePostData' > 1 hour ago</span>
            </div>
            <p className='singlePostDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, 
            voluptatem nisi explicabo ab numquam in consectetur a totam minima quidem nulla, 
            commodi cum, eligendi optio recusandae suscipit! 
            Nostrum corrupti deserunt provident quos possimus ratione dolore 
            repudiandae blanditiis aperiam magni sit nesciunt 
            sint hic aliquid, amet est, ab enim neque autem?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, 
            voluptatem nisi explicabo ab numquam in consectetur a totam minima quidem nulla, 
            commodi cum, eligendi optio recusandae suscipit! 
            Nostrum corrupti deserunt provident quos possimus ratione dolore 
            repudiandae blanditiis aperiam magni sit nesciunt 
            sint hic aliquid, amet est, ab enim neque autem?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, 
            voluptatem nisi explicabo ab numquam in consectetur a totam minima quidem nulla, 
            commodi cum, eligendi optio recusandae suscipit! 
            Nostrum corrupti deserunt provident quos possimus ratione dolore 
            repudiandae blanditiis aperiam magni sit nesciunt 
            sint hic aliquid, amet est, ab enim neque autem?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, 
            voluptatem nisi explicabo ab numquam in consectetur a totam minima quidem nulla, 
            commodi cum, eligendi optio recusandae suscipit! 
            Nostrum corrupti deserunt provident quos possimus ratione dolore 
            repudiandae blanditiis aperiam magni sit nesciunt 
            sint hic aliquid, amet est, ab enim neque autem?
            </p>
        </div>
    </div>
)
}

export default  SinglePost;




