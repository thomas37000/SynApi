/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from 'react';
import { AccordionItemPanel } from 'react-accessible-accordion';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import PropTypes from 'prop-types';
import { ParamsContext } from '../Context/ParamsContext';
import SlideFilter from './SlideFilter';
import 'react-accessible-accordion/dist/fancy-example.css';
import 'font-awesome/css/font-awesome.min.css';
import './Sidebar.css';

const Tri = (post, props) => {
  const { statesParams } = useContext(ParamsContext);
  const [newPost, setNewPost] = useState();
  const [jsonObj, setJsonObj] = useState({});

  const handleChange = (e) => {
    statesParams.function.setSorting(e.target.value);
  };

  useEffect(() => {
    sessionStorage.setItem('newPost', newPost);
    setJsonObj({
      newPost,
    });
  }, [newPost]);

  return (
    <AccordionItemPanel>
      <div className="sidebar-category">
        {/* Le Slider pour modifier le nombre de posts */}
        <div className="dropdown">
          <SlideFilter value={post} />
        </div>

        {/* //
              ---------------------------------------------------------------------------
            // par défault c'est déjà par ordre de publication et décroissant DESC ! //
              ---------------------------------------------------------------------------
        */}
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="tri des posts"
            name="new_order_by"
            defaultValue="DESC"
            // defaultValue={statesParams.sorting}
            onChange={(e) => handleChange(e)}
          >
            <FormControlLabel
              // affiche les contenus avec des emojis en premier comme les smiley ou autre ...
              value="content"
              control={<Radio />}
              className="radioButton"
              label=" Tri par ordre de contenus"
            />

            <FormControlLabel
              value="ASC"
              control={<Radio />}
              className="radioButton"
              label="Tri par ordre croissant"
            />

            <FormControlLabel
              value="DESC"
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

// Tri.propTypes = {
//   aria: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   selected: PropTypes.string.isRequired,
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };

export default Tri;
