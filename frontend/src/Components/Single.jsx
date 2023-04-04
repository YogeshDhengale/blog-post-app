import React from 'react'
import Navbar from './Navbar';

const Single = () => {
    return (
        <>
        <Navbar></Navbar>
        <div className="homepage">
            <div className="single-card">
                <div className="line"></div>
                <h1>This is The Title for the Blog</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, eius. Consequatur, voluptatibus? Eum consequuntur, excepturi animi facilis fugit similique veritatis est neque earum incidunt nemo, et, eaque consectetur corporis iure.</p>
                <div className="btn">
                    <button class="bn632-hover bn28">Edit</button>
                    <button class="bn632-hover bn26">Delete</button>
                </div>
            </div>
        </div></>
    )
}

export default Single