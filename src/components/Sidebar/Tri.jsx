/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from 'react';
import { AccordionItemPanel } from 'react-accessible-accordion';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import SlideFilter from './SlideFilter';
import 'react-accessible-accordion/dist/fancy-example.css';
import 'font-awesome/css/font-awesome.min.css';
import './Sidebar.css';

const Tri = (post) => {
  const [newPost, setNewPost] = useState();
  const [jsonObj, setJsonObj] = useState({});
  const [newOrderAsc, setNewOrderAsc] = useState();
  const [newOrderDesc, setNewOrderDesc] = useState();

  const handleChange = (event) => {
    setNewPost(event.target.value);
    setNewOrderDesc(event.target.value);
    setNewOrderAsc(event.target.value);
  };

  useEffect(() => {
    sessionStorage.setItem('newPost', newPost);
    sessionStorage.setItem('new_order_by', newOrderDesc);
    sessionStorage.setItem('new_order_by', newOrderAsc);
    // console.log('json Sidebar', sessionStorage);
    // console.log('TRI', newPost);
    setJsonObj({
      newPost,
      newOrderDesc,
      newOrderAsc,
    });
  }, [newPost, newOrderAsc, newOrderDesc]);

  const changePost = (e) => {
    setNewPost(newPost);
    setNewPost({ value: e.target.value });
    setNewOrderAsc(newOrderAsc);
    setNewOrderAsc({ value: e.target.value });
    setNewOrderDesc(newOrderDesc);
    setNewOrderDesc({ value: e.target.value });
  };

  // onClick trier items et mettre à jour

  return (
    <AccordionItemPanel>
      <div className="sidebar-category">
        <div className="dropdown">
          <SlideFilter value={post} />
        </div>

        <FormControl component="fieldset">
          <RadioGroup
            aria-label="tri des posts"
            name="new_order_by"
            value={newPost}
            onChange={handleChange}
          >
            {/* c'est déjà par ordre de publication par défault ! */}

            <FormControlLabel
              value="nouveau contenu"
              control={<Radio />}
              className="radioButton"
              label=" Tri par ordre de contenus"
            />
            <FormControlLabel
              // value={newOrderAsc}
              value="aaa"
              control={<Radio />}
              className="radioButton"
              label="Tri par ordre croissant"
            />
            <FormControlLabel
              // value={newOrderDesc}
              value="eee"
              control={<Radio />}
              className="radioButton"
              label="Tri par ordre décroissant"
            />
          </RadioGroup>
        </FormControl>
      </div>
    </AccordionItemPanel>
  );
};

export default Tri;
