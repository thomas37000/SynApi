/* eslint-disable no-unused-vars */
import React, { useState, useContext } from 'react';
import { AccordionItemPanel } from 'react-accessible-accordion';
import SlideFilter from './SlideFilter';
import 'react-accessible-accordion/dist/fancy-example.css';
import 'font-awesome/css/font-awesome.min.css';
import './Sidebar.css';
import { ColorContext } from '../Context/ColorContext';

const Tri = () => {
  const { states } = useContext(ColorContext);

  const [newPost, setNewPost] = useState();

  const changePost = (e) => {
    // setNewPost(newPost);
    states.function.setNewPost({ value: e.target.value });
  };

  return (
    <AccordionItemPanel>
      <div className="sidebar-category">
        <div className="dropdown">
          <SlideFilter changePost={changePost} color="#ffcc00" />
        </div>
        <div className="dropdown">
          <div className="tri">
            <input type="checkbox" />
            Tri par date de publication
          </div>
        </div>
        <div className="dropdown">
          <div className="tri">
            <input type="checkbox" />
            Tri par ordre de contenus
          </div>
        </div>
        <div className="dropdown">
          <div className="tri">
            <input type="checkbox" />
            Tri par ordre croissant
          </div>
        </div>
        <div className="dropdown">
          <div className="tri">
            <input type="checkbox" />
            Tri par ordre décroissant
          </div>
        </div>
      </div>
    </AccordionItemPanel>
  );
};

export default Tri;
