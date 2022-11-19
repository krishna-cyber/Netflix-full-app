import React from "react";
import "./navbarstyle.css";
import { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { IoMdNotifications } from "react-icons/io";
import { AiFillCaretDown } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    console.log(isScrolled);
    return () => (window.onscroll = null);
  };

  return (
    <>
      <nav className={isScrolled ? "scrolled" : null}>
        <menu>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/330px-Netflix_2015_logo.svg.png'
            alt='Netflix'
          />

          <li>Homepage</li>
          <li>Series</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
        </menu>
        <div className='right'>
          <BiSearchAlt2 />
          <span>KID</span>
          <IoMdNotifications />
          <img
            src='https://s.gravatar.com/avatar/f22fb6b42c39ec3a0483282ed2dfa332?s=96&d=mm&r=g'
            alt=''
          />
          <div className='profile'>
            <AiFillCaretDown />
            <div className='option'>
              <span>
                <span className='icon inline-block mr-2'>
                  <FiSettings />
                </span>
                Setting
              </span>
              <span>
                <span className='inline-block mr-2'>
                  <BiLogOut />
                </span>
                Log out
              </span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
