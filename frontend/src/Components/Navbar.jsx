import React, { useEffect, useRef,useState } from 'react'
import { IoMdAdd} from 'react-icons/io'
import {FaUserAlt} from 'react-icons/fa'
import {AiFillHome, AiOutlineSearch} from 'react-icons/ai'
import {RxCrossCircled} from 'react-icons/rx'
 
const Navbar = () => {
    const lastScrollTop=useRef(0)
    const [isNavbarVisble, setIsNavebarVisble]=useState(true);
    const handleScroll=()=>{
        const {pageY}=window;

        if(pageY > lastScrollTop.current){
            setIsNavebarVisble(false)
        }else if(pageY<lastScrollTop.current){
            setIsNavebarVisble(true)
        }
        lastScrollTop.current=pageY
    }

    useEffect(()=>{
        window.addEventListener("scroll", handleScroll, {passive: true})
        return window.removeEventListener("scroll",handleScroll)
    },[])

    const userData = JSON.parse(localStorage.getItem('user'));
    const role=userData.role
    const user=userData.user.split("@")[0]
    console.log(user)
  return (
    <>
       <nav className={`${isNavbarVisble? 'visible' :""}`}>
        <h1>LOGO</h1>
        <div className="nav-items">
            <div className='searchDrop'>
                <AiOutlineSearch></AiOutlineSearch>
                <input type={"text"} className='input-area' placeholder='Search a blog' ></input>
                <RxCrossCircled ></RxCrossCircled>
              </div>
            <a href="/HomePage"><AiFillHome></AiFillHome> Home</a>
            {role !== "Reader" && <a href="/CreatePost"><IoMdAdd></IoMdAdd> Create Post</a> }
        </div>
        <div className="user">
            <FaUserAlt></FaUserAlt>
            <div className='user-details'>
                <h2 className="username">{user}</h2>
                <h6 className='userTitle'>{role}</h6>
            </div>
        </div>
       </nav>
    </>)
}

export default Navbar