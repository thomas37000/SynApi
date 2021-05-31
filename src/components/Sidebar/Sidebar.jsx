/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect, useContext } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import { SketchPicker } from 'react-color';
import FontPicker from 'font-picker-react';
// import PropTypes from 'prop-types';
import {
  CloseIcon,
  SidebarStyled,
  SidebarWrapper,
} from './SidebarStyledComponent';
import { ColorContext } from '../Context/ColorContext';
import { ParamsContext } from '../Context/ParamsContext';
import {
  defaultColorsFacebook,
  defaultColorsInstagram,
  defaultColorsTwitter,
  defaultPost,
  defaultTri,
  defaultTypoJson,
} from '../utils/helpers';
import BtnCancel from '../Buttons/ButtonCancel';
import BtnSubmit from '../Buttons/ButtonSubmit';
import Tri from './Tri';
import 'react-accessible-accordion/dist/fancy-example.css';
import 'font-awesome/css/font-awesome.min.css';
import './Sidebar.css';

const Sidebar = ({ interval, show, setIsOpened }) => {
  const { states } = useContext(ColorContext);
  const { statesParams } = useContext(ParamsContext);

  const [activeFontFamily, setActiveFontFamily] = useState(
    states.activeFontFamily
  );
  const [bgColor, setBgColor] = useState(states.bgColor);
  const [hashtagColor, setHashtagColor] = useState(states.hashtagColor);
  const [mentionColor, setMentionColor] = useState(states.mentionColor);
  const [newOrder, setNewOrder] = useState(statesParams.newOrder);
  const [newOrderAsc, setNewOrderAsc] = useState(statesParams.newOrderAsc);
  const [newOrderContent, setNewOrderContent] = useState(
    statesParams.newOrderContent
  );
  const [newPost, setNewPost] = useState();
  // const [sidebarOpen, setSidebarOpen] = useState(false);
  const [txtColor, setTxtColor] = useState(states.setTxtColor);
  const [jsonObj, setJsonObj] = useState({});

  const restoreFontFamily = () => {
    setActiveFontFamily(!activeFontFamily);
  };

  const submitColor = () => {
    const jsonColor = JSON.stringify(jsonObj);
  };

  useEffect(() => {
    sessionStorage.setItem('activeFontFamily', activeFontFamily);
    sessionStorage.setItem('bgColor', bgColor);
    sessionStorage.setItem('hashtagColor', hashtagColor);
    sessionStorage.setItem('mentionColor', mentionColor);
    sessionStorage.setItem('new_order', newOrder);
    sessionStorage.setItem('new_order', newOrderAsc);
    sessionStorage.setItem('new_order_by', newOrderContent);
    sessionStorage.setItem('newPost', newPost);
    sessionStorage.setItem('txtColor', txtColor);
    const jsonFacebook = JSON.stringify(defaultColorsFacebook);
    const jsonInstagram = JSON.stringify(defaultColorsInstagram);
    const jsonTwitter = JSON.stringify(defaultColorsTwitter);
    console.log(jsonFacebook, jsonInstagram, jsonTwitter);
    setJsonObj({
      activeFontFamily,
      bgColor,
      hashtagColor,
      newOrder,
      newOrderAsc,
      newOrderContent,
      newPost,
      mentionColor,
      txtColor,
      defaultColorsFacebook,
      defaultColorsInstagram,
      defaultColorsTwitter,
    });
  }, [
    activeFontFamily,
    bgColor,
    hashtagColor,
    newOrder,
    newOrderAsc,
    newOrderContent,
    newPost,
    mentionColor,
    txtColor,
    defaultColorsFacebook,
    defaultColorsInstagram,
    defaultColorsTwitter,
  ]);

  const handleChangeBg = (color) => {
    states.function.setBgColor(color);
    sessionStorage.setItem('bgColor', color);
    JSON.stringify('background', color);
    setBgColor(color);
  };

  const handleChangeTxt = (color) => {
    states.function.setTxtColor(color);
    sessionStorage.setItem('txtColor', color);
    JSON.stringify('text', color);
    setTxtColor(color);
  };

  const handleChangeHashtag = (color) => {
    states.function.setHashtagColor(color);
    states.function.setMentionColor(color);
    sessionStorage.setItem('hasthagColor', color);
    sessionStorage.setItem('mentionColor', color);
    JSON.stringify('hashtag', color);
    JSON.stringify('mention', color);
    setHashtagColor(color);
    setMentionColor(color);
  };

  const handleChangeFontFamily = () => {
    states.function.setActiveFontFamily(activeFontFamily);
    sessionStorage.setItem('activeFontFamily', activeFontFamily);
  };

  const handleChangePost = () => {
    statesParams.function.setNewOrder(newOrder);
    statesParams.function.setNewOrderAsc(newOrderAsc);
    statesParams.function.setNewOrderContent(newOrderContent);
    states.function.setNewPost(newPost);
    sessionStorage.setItem('new_order', newOrder);
    sessionStorage.setItem('new_order', newOrderAsc);
    sessionStorage.setItem('new_order_by', newOrderContent);
    sessionStorage.setItem('newPost', newPost);
  };

  return (
    <SidebarStyled show={show ? 1 : 0}>
      <SidebarWrapper>
        <CloseIcon
          onClick={() => {
            setIsOpened(false);
          }}
        >
          <span />
        </CloseIcon>
        <div className="sidebar-category">
          <span>Couleurs et Typographie</span>
          <Accordion allowZeroExpanded>
            <AccordionItem key="">
              <AccordionItemHeading>
                <AccordionItemButton>
                  changer la couleur du Background
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <SketchPicker
                  color={bgColor}
                  onChange={(color) => handleChangeBg(color.hex)}
                  className="sketch-picker"
                />
                <BtnCancel handleClick={states.function.restoreBg} />
                <BtnSubmit handleClick={submitColor} />
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
          <Accordion allowZeroExpanded>
            <AccordionItem key="">
              <AccordionItemHeading>
                <AccordionItemButton>
                  changer la couleur du Texte
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <SketchPicker
                  color={txtColor}
                  onChange={(color) => handleChangeTxt(color.hex)}
                  className="sketch-picker"
                />
                <BtnCancel handleClick={states.function.restoreTxt} />
                <BtnSubmit handleClick={submitColor} />
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
          <Accordion allowZeroExpanded>
            <AccordionItem key="">
              <AccordionItemHeading>
                <AccordionItemButton>
                  changer la couleur des # et @
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <SketchPicker
                  color={(hashtagColor, mentionColor)}
                  onChange={(color) => handleChangeHashtag(color.hex)}
                  className="sketch-picker"
                />
                <BtnCancel
                  handleClick={states.function.restoreHashtagAndMention}
                />
                <BtnSubmit handleClick={submitColor} />
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
          <Accordion allowZeroExpanded>
            <AccordionItem key="">
              <AccordionItemHeading>
                <AccordionItemButton>
                  changer la Typographie
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <FontPicker
                  apiKey="AIzaSyBqmdg2e_R-b0vz6xutdlonOrfWUuQ0Tas"
                  activeFontFamily={activeFontFamily}
                  onChange={(nextFont) =>
                    handleChangeFontFamily(nextFont.family)
                  }
                  className="typo"
                />
                <BtnCancel handleClick={restoreFontFamily} />
                <BtnSubmit handleClick={submitColor} />
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
        {/*  ************** SLIDE FILTER + TRI par ordre de contenu ou ASC ou DESC  ************** */}
        <div className="sidebar-category">
          {/* <span>Tri et nombre de posts</span> */}
          <Accordion allowZeroExpanded>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <span>Tri et nombre de posts</span>
                </AccordionItemButton>
              </AccordionItemHeading>
              <Tri handleChange={handleChangePost} />
            </AccordionItem>
          </Accordion>
        </div>
        {/* ********************************************* */}
      </SidebarWrapper>
    </SidebarStyled>
  );
};

export default Sidebar;
