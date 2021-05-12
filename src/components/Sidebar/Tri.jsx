/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from 'react';
import { AccordionItemPanel } from 'react-accessible-accordion';
import SlideFilter from './SlideFilter';
import 'react-accessible-accordion/dist/fancy-example.css';
import 'font-awesome/css/font-awesome.min.css';
import './Sidebar.css';

const Tri = (post) => {
  const [newPost, setNewPost] = useState();
  const [jsonObj, setJsonObj] = useState({});

  useEffect(() => {
    sessionStorage.setItem('newPost', newPost);
    // console.log('json Sidebar', sessionStorage);
    console.log('TRI', newPost);
    setJsonObj({
      newPost,
    });
  }, [newPost]);

  const changePost = (e) => {
    setNewPost(newPost);
    setNewPost({ value: e.target.value });
  };

  return (
    <AccordionItemPanel>
      <div className="sidebar-category">
        <div className="dropdown">
          <SlideFilter value={post} />
        </div>
        <div className="dropdown">
          <div className="tri">
            <input type="checkbox" className="checkbox" />
            <span className="checkmark" />
            Tri par date de publication
          </div>
        </div>
        <div className="dropdown">
          <div className="tri">
            <input type="checkbox" className="checkbox" />
            <span className="checkmark" />
            Tri par ordre de contenus
          </div>
        </div>
        <div className="dropdown">
          <div className="tri">
            <input type="checkbox" className="checkbox" />
            <span className="checkmark" />
            Tri par ordre croissant
          </div>
        </div>
        <div className="dropdown">
          <div className="tri">
            <input type="checkbox" className="checkbox" />
            <span className="checkmark" />
            Tri par ordre décroissant
          </div>
        </div>
      </div>
    </AccordionItemPanel>
  );
};

export default Tri;
