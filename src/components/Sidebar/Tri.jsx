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
  const [newOrder, setNewOrder] = useState(statesParams.newOrder);
  const [newOrderAsc, setNewOrderAsc] = useState(statesParams.newOrderAsc);
  const [newOrderContent, setNewOrderContent] = useState(
    statesParams.newOrderContent
  );
  const [newOrderDesc, setNewOrderDesc] = useState();

  const handleChange = (e) => {
    setNewOrder(e.target.value);
    setNewOrderAsc(e.target.value);
    setNewOrderContent(e.target.value);
    setNewPost(e.target.value);
    statesParams.function.setNewOrder(e.target.value);
    statesParams.function.setNewOrderAsc(e.target.value);
    statesParams.function.setNewOrderContent(e.target.value);
    sessionStorage.setItem('new_order', e.target.value);
    sessionStorage.setItem('new_order_by', e.target.value);
  };

  useEffect(() => {
    sessionStorage.setItem('new_order', newOrder);
    // sessionStorage.setItem('new_order', newOrderDesc);
    sessionStorage.setItem('new_order', newOrderAsc);
    sessionStorage.setItem('new_order_by', newOrderContent);
    sessionStorage.setItem('newPost', newPost);
    // console.log('json Sidebar', sessionStorage);
    // console.log('TRI', newPost);
    setJsonObj({
      newPost,
      newOrder,
      // newOrderDesc,
      newOrderAsc,
      newOrderContent,
    });
  }, [newPost, newOrder, newOrderAsc, newOrderContent]);

  // onClick trier items et mettre à jour
  const { value } = props;

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
            value={newOrder && newOrderAsc && newOrderContent && newPost}
            onChange={(e) => handleChange(e)}
          >
            <FormControlLabel
              value={newOrderContent}
              control={<Radio />}
              className="radioButton"
              label=" Tri par ordre de contenus"
            />
            <div>{newOrderContent}</div>
            <FormControlLabel
              value={newOrderAsc}
              control={<Radio />}
              className="radioButton"
              label="Tri par ordre croissant"
            />
            <div>{newOrderAsc}</div>
            <FormControlLabel
              value={newOrder}
              control={<Radio />}
              className="radioButton"
              label="Tri par ordre décroissant"
            />
            <div>{newOrder}</div>
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
