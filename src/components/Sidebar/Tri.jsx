import React, { useState } from 'react';
import { AccordionItemPanel } from 'react-accessible-accordion';
import SlideFilter from './SlideFilter';
// import SlideFilterHooks from './SlideFilterHooks';
import 'react-accessible-accordion/dist/fancy-example.css';
import 'font-awesome/css/font-awesome.min.css';
import './Sidebar.css';

const Tri = () => {
  const [setNewPost] = useState();

  const changePost = (e) => {
    setNewPost({ value: e.target.value });
  };

  return (
    <AccordionItemPanel>
      <div className="sidebarCategory">
        <div className="dropdown">
          <SlideFilter handleChange={changePost} />
          {/* <SlideFilterHooks handleChange={changePost} /> */}
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
