/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useState, useEffect, useContext } from 'react';
import { AccordionItemPanel } from 'react-accessible-accordion';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import PropTypes from 'prop-types';
import { ParamsContext } from '../Context/ParamsContext';
import BtnSubmit from '../Buttons/ButtonSubmit';
import BtnCancel from '../Buttons/ButtonCancel';
import SlideFilter from './SlideFilter';
import 'react-accessible-accordion/dist/fancy-example.css';
import 'font-awesome/css/font-awesome.min.css';
import './Sidebar.css';

const Tri = (post, params) => {
  const { statesParams } = useContext(ParamsContext);

  const [newPost, setNewPost] = useState(10);
  const [sorting] = useState(statesParams.sorting);
  const [jsonObj, setJsonObj] = useState();

  const handleChange = (e) => {
    statesParams.function.setSorting(e.target.value);
  };

  const submitedParams = params || {
    order: sorting,
    post: newPost,
  };

  const stringify = () => {
    return JSON.stringify(params);
  };

  const submitParams = () => {
    const stringParams = stringify({
      order: sorting,
      post: newPost,
    });
    setJsonObj(stringParams);
    console.log(stringParams);
  };

  useEffect(() => {
    sessionStorage.setItem('post', newPost);
    sessionStorage.setItem('order', sorting);
    setJsonObj(
      JSON.stringify(
        submitedParams,
        (prop, val) => {
          return val;
        },
        3
      )
    );
    // console.log('mise à jour params', jsonObj);
  }, [jsonObj, newPost, sorting]);

  // ---------------------------------------------------------------------------
  // fonction restore slider et ordre DESC au bouton annuler
  // ---------------------------------------------------------------------------

  // const restoreDefaultPost = () => {
  //   setNewPost(10);
  //   sessionStorage.setItem('post', 10);
  // };

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

          {/* <div className="triBtn">
            <BtnCancel handleClick={() => restoreDefaultPost()} />
            <BtnSubmit handleClick={() => submitParams()} />
          </div> */}
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
  }),
};

Tri.defaultProps = {
  post: {},
};

export default Tri;
