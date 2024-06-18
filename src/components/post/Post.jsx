import React from 'react'
import './post.css'


function Post() {
return (
    <div className='post'>
        <img src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600" className='postImg' alt="" />

        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">
                lorem ipsum dolor sit amet
            </span>
            <hr />
            <span className="postData">1 hour ago</span>
        </div>
        <p className="postDec">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quam exercitationem quasi sint. Ipsum, nesciunt nobis obcaecati quos,
            quaerat numquam totam iusto illo vitae minima labore.
        </p>
    </div>
    )
}

export default Post
