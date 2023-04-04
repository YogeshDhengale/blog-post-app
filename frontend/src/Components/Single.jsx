import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import { useNavigate, useParams } from 'react-router-dom';
import { getPost, getdeleteAblog } from '../utils/api';

const Single = () => {
    const { id } = useParams()
    const [post, setPost] = useState(null);

    const navigate = useNavigate()

    useEffect(() => {
        const fetchPost = async () => {
            const response = await getPost(id);
            setPost(response.blog);
        };
        fetchPost();

    }, [id]);

    if (!post) {
        return <div>Loading...</div>;
    }

    const handleDelete = async () => {
        const res = await getdeleteAblog(id);
        if (res.error) {
            alert(res.error);
        } else {
            navigate('/HomePage');
        }
    };

    const userData = JSON.parse(localStorage.getItem('user'));
    const role = userData.role

    return (
        <>
            <Navbar></Navbar>
            <div className="homepage">
                <div className="single-card">
                    <div className="line"></div>
                    <h1>{post.title}</h1>
                    <p>{post.content}</p>
                    <div className="btn">
                        {role !== "Reader" && <button class="bn632-hover bn28" >Edit</button>}
                        {role !== "Reader" && <button class="bn632-hover bn26" onClick={handleDelete}>Delete</button>}
                    </div>
                </div>
            </div></>
    )
}

export default Single