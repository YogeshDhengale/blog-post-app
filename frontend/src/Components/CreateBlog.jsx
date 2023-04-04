import React from 'react'
import Navbar from './Navbar';

const CreateBlog = () => {
    return (
        <>
        <Navbar></Navbar>
        <div className="homepage">
            <div className="single-card">
                <div className="line"></div>
                <div className="titlecard">
                    <label htmlFor="title">Please Enter Your Title below: </label>
                    <input type="text" className="input-title" id='title' />
                </div>
                <div className="titlecard">
                    <label htmlFor="title">Please Enter Your Content below: </label>
                    <textarea name="content" className='input-content' id="" cols="30" rows="10"></textarea>
                </div>

                <div className="btn">
                    <button class="bn632-hover bn26">Post</button>
                </div>
            </div>
        </div></>
    )
}

export default CreateBlog