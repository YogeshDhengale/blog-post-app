import React, { useState } from 'react'
import Navbar from './Navbar';
import { getCreateBlog } from '../utils/api';
import { useNavigate } from 'react-router-dom';

const CreateBlog = () => {
    const [title, setTitle]=useState()
    const [content, setContent]=useState()
    const userData = JSON.parse(localStorage.getItem('user'));
    const author=userData.author
    const navigate=useNavigate()
    const handlePost= async ()=>{
        const res = await getCreateBlog(title, content, author);
        if (res.error) {
          alert(res.error);
        } else {
          navigate('/HomePage');
        }
    }

    return (
        <>
        <Navbar></Navbar>
        <div className="homepage">
            <div className="single-card">
                <div className="line"></div>
                <div className="titlecard">
                    <label htmlFor="title">Please Enter Your Title below: </label>
                    <input type="text" className="input-title" id='title'   onChange={(e)=>{setTitle(e.target.value)}} />
                </div>
                <div className="titlecard">
                    <label htmlFor="title">Please Enter Your Content below: </label>
                    <textarea name="content" className='input-content' id="" cols="30" rows="10" onChange={(e)=>{setContent(e.target.value)}}></textarea>
                </div>

                <div className="btn">
                    <button class="bn632-hover bn26" onClick={handlePost}>Post</button>
                </div>
            </div>
        </div></>
    )
}

export default CreateBlog