import React, { useState, useEffect } from 'react'
import Navbar from './Navbar';
import { getAllPosts, getAuthorData } from '../utils/api';
import { useNavigate } from 'react-router-dom';

const Author = () => {
    const [page, setpage] = useState(1)
    const [data, setData] = useState()
    const navigate = useNavigate()
    const userData = JSON.parse(localStorage.getItem('user'));
    const author = userData.author
    useEffect(() => {
        async function fetchBlogs() {
            const response = await getAuthorData(page, author);
            setData(response);
        }
        fetchBlogs();
    }, [page, author])

    const handleDecrement = () => {
        if (page > 1) {
            setpage(page - 1)
        }
        else {
            console.log('none')
        }
    }

    const handleIncrement = () => {
        if (page < data.totalPages) {
            setpage(page + 1)
        }

        else {
            console.log('none')
        }
    }

    const handlePageChange = () => {
        getAllPosts(page)
            .then((data) => {
                console.log(data);
                setData(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    const handleSingleBlog = (id) => {
        console.log(id)
        navigate(`/PostPage/${id}`)
    }


    return (
        <>
            <Navbar></Navbar>
            <div className='homepage' >
                {data && data.blogs ? (
                    <>
                        {data.blogs.map((blog) => (
                            <div key={blog._id} className="blog" onClick={() => { handleSingleBlog(blog._id) }}>
                                <div className="line"></div>
                                <div className="title">
                                    <h1>{blog.title}</h1>
                                </div>
                            </div>
                        ))}
                        <div className="pagination">
                            <button onClick={handleDecrement}>{'<'}</button>
                            <p onChange={handlePageChange}>{page}</p>
                            <button onClick={handleIncrement}>{'>'}</button>
                        </div>
                    </>
                ) : (
                    <div className="loading">Loading...</div>
                )}
            </div>
        </>
    )
}

export default Author
