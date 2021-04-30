/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from './syn.png';
import Burger from './Burger';
import SidebarTool from '../Sidebar/Sidebar';

const Nav = styled.nav`
  width: 100%;
  height: 7vh;
  background: #f7f7f7;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    display: flex;
    width: 35px;
    height: 35px;
    margin-left: 30px;
    border-radius: 50%;
  }

  @media (max-width: 765px) {
    .logo {
      display: flex;
    }
  }
`;

const Navbar = () => {
  const [postUpdate, setPostUpdate] = useState(10);

  const updatePost = () => {
    setPostUpdate(postUpdate);
  };

  console.log('state post Navbar', postUpdate);

  function TEST() {
    // const [bgColor, setBgColor] = useState();
    // const [hashtagColor, setHashtagColor] = useState();
    // const [mentionColor, setMentionColor] = useState();
    // const [txtColor, setTxtColor] = useState();
    // const [postUpdate, setPostUpdate] = useState(5);
    // const upDateBg = (color) => {
    //   setBgColor({ background: color.hex });
    // };
    // const upDateHashtag = () => {
    //   setHashtagColor(hashtagColor);
    // };
    // const upDateMention = () => {
    //   setMentionColor(mentionColor);
    // };
    // const upDateTxtColor = () => {
    //   setTxtColor(txtColor);
    // };
    // const upDatePost = () => {
    //   setPostUpdate(postUpdate);
    // };
    // function upDateAll() {
    //   setBgColor(bgColor);
    //   setHashtagColor(hashtagColor);
    //   setMentionColor(mentionColor);
    //   setPostUpdate(postUpdate);
    //   setTxtColor(txtColor);
    // }
  }

  return (
    <Nav>
      <Link to="/">
        <img className="logo" src={logo} alt="" />
      </Link>
      <Burger />
      <SidebarTool handleChange={updatePost} />
    </Nav>
  );
};

export default Navbar;
