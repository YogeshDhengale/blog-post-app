import React from 'react'
import Navbar from './Navbar';

const Home = () => {
  return (
    <>
    <Navbar></Navbar>
    <div className='homepage'>
        <div className="blog">
            <div className="line"></div>
            <div className="title">
                <h1>This is nice blog part 1</h1>
            </div>
        </div>
        <div className="blog">
            <div className="line"></div>
            <div className="title">
                <h1>This is nice blog part 1</h1>
            </div>
        </div>
        <div className="blog">
            <div className="line"></div>
            <div className="title">
                <h1>This is nice blog part 1</h1>
            </div>
        </div>
        <div className="blog">
            <div className="line"></div>
            <div className="title">
                <h1>This is nice blog part 1</h1>
            </div>
        </div>
        <div className='pagination'>
            <a href="">{'<'}</a>
            <a href="">1</a>
            <a href="">{'>'}</a>
        </div>
    </div>
    </>
  )
}

export default Home