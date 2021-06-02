/* eslint-disable object-shorthand */
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
import BtnCancel from '../Buttons/ButtonCancel';
import BtnSubmit from '../Buttons/ButtonSubmit';
import Tri from './Tri';
import 'react-accessible-accordion/dist/fancy-example.css';
import 'font-awesome/css/font-awesome.min.css';
import './Sidebar.css';

const Sidebar = ({ show, setIsOpened }) => {
  const { states } = useContext(ColorContext);
  const { statesParams } = useContext(ParamsContext);

  const [activeFontFamily, setActiveFontFamily] = useState(
    states.activeFontFamily
  );
  const [background, setBackground] = useState(states.background);
  const [hashtagColor, setHashtagColor] = useState(states.hashtagColor);
  const [mentionColor, setMentionColor] = useState(states.mentionColor);
  const [newOrder, setNewOrder] = useState(statesParams.newOrder);
  const [newOrderAsc, setNewOrderAsc] = useState(statesParams.newOrderAsc);
  const [newPost, setNewPost] = useState();
  const [txtColor, setTxtColor] = useState(states.setTxtColor);
  const [jsonObj, setJsonObj] = useState({});

  const restoreFontFamily = () => {
    setActiveFontFamily(!activeFontFamily);
  };

  const submitColor = () => {
    const jsonColor = JSON.stringify(jsonObj);
  };
  const colorJson = {
    background: background,
    hashtag: hashtagColor,
    mention: mentionColor,
    text: txtColor,
    // font family reste à Arial, il ne se modifie pas ?
    font_family: activeFontFamily,
  };

  const colorStringify = JSON.stringify(
    colorJson,
    (prop, val) => {
      return val;
    },
    3
  );
  console.log('colors', colorStringify);

  useEffect(() => {
    sessionStorage.setItem('font_family', activeFontFamily);
    sessionStorage.setItem('background', background);
    sessionStorage.setItem('hashtag', hashtagColor);
    sessionStorage.setItem('mention', mentionColor);
    sessionStorage.setItem('desc', newOrder);
    sessionStorage.setItem('asc', newOrderAsc);
    sessionStorage.setItem('post', newPost);
    sessionStorage.setItem('text', txtColor);
    setJsonObj(
      // le point d' API doit être fait pour les enregistrer
      colorStringify
    );
  }, [
    activeFontFamily,
    background,
    hashtagColor,
    newOrder,
    newOrderAsc,
    newPost,
    mentionColor,
    txtColor,
  ]);

  const handleChangeBg = (color) => {
    states.function.setBackground(color);
    sessionStorage.setItem('background', color);
    setBackground(color);
  };

  const handleChangeTxt = (color) => {
    states.function.setTxtColor(color);
    sessionStorage.setItem('text', color);
    setTxtColor(color);
  };

  const handleChangeHashtag = (color) => {
    states.function.setHashtagColor(color);
    states.function.setMentionColor(color);
    sessionStorage.setItem('hasthag', color);
    sessionStorage.setItem('mention', color);
    setHashtagColor(color);
    setMentionColor(color);
  };

  const handleChangeFontFamily = () => {
    states.function.setActiveFontFamily(activeFontFamily);
    sessionStorage.setItem('font_family', activeFontFamily);
  };

  const handleChangePost = () => {
    statesParams.function.setNewOrder(newOrder);
    statesParams.function.setNewOrderAsc(newOrderAsc);
    states.function.setNewPost(newPost);
    sessionStorage.setItem('desc', newOrder);
    sessionStorage.setItem('asc', newOrderAsc);
    sessionStorage.setItem('post', newPost);
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
                  color={background}
                  onChange={(color) => handleChangeBg(color.hex)}
                  className="sketch-picker"
                />
                <BtnCancel handleClick={states.function.restoreBackground} />
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
