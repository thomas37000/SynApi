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

  const [newPost, setNewPost] = useState(10);
  const [sorting, setSorting] = useState(statesParams.sorting);
  const [jsonObj, setJsonObj] = useState();

  const handleChange = (e) => {
    statesParams.function.setSorting(e.target.value);
  };

  const triJson = {
    order: sorting,
    post: newPost,
  };
  // undifined ?
  console.log(triJson);

  const triStringify = JSON.stringify(
    triJson,
    (prop, val) => {
      return val;
    },
    3
  );
  console.log('order', triStringify);

  useEffect(() => {
    sessionStorage.setItem('post', newPost);
    sessionStorage.setItem('order', sorting);
    setJsonObj(triStringify);
  }, [newPost, sorting]);

  // const handleChangeSliderFilter = (e) => {
  //   statesParams.function.setNewPost(e.target.value);
  //   sessionStorage.setItem('post', e.target.value);
  // };

  return (
    <AccordionItemPanel>
      <div className="sidebar-category">
        {/* Le Slider pour modifier le nombre de posts */}
        <div className="dropdown">
          <SlideFilter
            value={post}
            // handleChange={() => handleChangeSliderFilter()}
          />
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

Tri.propTypes = {
  post: PropTypes.shape({
    aria: PropTypes.string,
    name: PropTypes.string,
    selected: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
  }).isRequired,
};

export default Tri;
