import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import { useNavigate, useParams } from 'react-router-dom';
import { getPost, getdeleteAblog, getupdatePost } from '../utils/api';

const Single = () => {
    const { id } = useParams()
    const [post, setPost] = useState(null);
    const [editing, setEditing] = useState(false);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        const fetchPost = async () => {
            const response = await getPost(id);
            setPost(response.blog);
            setTitle(response.blog.title);
            setContent(response.blog.content);
        };
        fetchPost();

    }, [id]);

    if (!post) {
        return <div>Loading...</div>;
    }

    const userData = JSON.parse(localStorage.getItem('user'));
    const author = userData.author;
    const role = userData.role;


    const handleEdit = async () => {
        //console.log(id)

        const res = await getupdatePost(id, title, content);
        if (res.error) {
            console.log(res)
            alert(res.error);
        } else {
            //console.log(res)
            // setPost(post.title=res.title)
            //setPost(post.content=res.content)
            setEditing(false)
            navigate('/HomePage')
        }
    };



    const handleDelete = async () => {
        const res = await getdeleteAblog(id);
        if (res.error) {
            alert(res.error);
        } else {
            navigate('/HomePage');
        }
    };

    return (
        <>
            <Navbar />
            <div className="homepage">
                <div className="single-card">
                    <div className="line"></div>
                    {editing ? (
                        <>
                            <div className="titlecard">
                                <label htmlFor="title">Please Edit Your Title below: </label>
                                <input
                                    type="text"
                                    className="input-title" id='title'
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>
                            <div className="titlecard">
                                <label htmlFor="content">Please Edit Your Content below: </label>
                                <textarea
                                    className='input-content' id="content"
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                />
                            </div>
                            <div className="btn">
                                <button className="bn632-hover bn26" onClick={handleEdit}>Save</button>
                                <button className="bn632-hover bn28" onClick={() => setEditing(false)}>Cancel</button>
                            </div>

                        </>
                    ) : (
                        <>
                            <h1>{post.title}</h1>
                            <p>{post.content}</p>
                            <div className="btn">
                                {(role === "Admin" || post.author === author) && (
                                    <>
                                        <button
                                            className="bn632-hover bn28"
                                            onClick={() => setEditing(true)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="bn632-hover bn26"
                                            onClick={handleDelete}
                                        >
                                            Delete
                                        </button>
                                    </>
                                )}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

export default Single;
