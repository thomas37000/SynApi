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
  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setNewPost(event.target.value);
  };

  useEffect(() => {
    sessionStorage.setItem('newPost', newPost);
    // console.log('json Sidebar', sessionStorage);
    // console.log('TRI', newPost);
    setJsonObj({
      newPost,
    });
  }, [newPost]);

  const changePost = (e) => {
    setNewPost(newPost);
    setNewPost({ value: e.target.value });
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
            aria-label="gender"
            name="gender1"
            value={newPost}
            onChange={handleChange}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              className="radioButton"
              label=" Tri par date de publication"
            />
            <FormControlLabel
              value="male"
              control={<Radio />}
              className="radioButton"
              label=" Tri par ordre de contenus"
            />
            <FormControlLabel
              value="other"
              control={<Radio />}
              className="radioButton"
              label="Tri par ordre croissant"
            />
            <FormControlLabel
              value="disabled"
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
