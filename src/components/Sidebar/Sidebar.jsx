/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useState, useEffect, useContext, useRef } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import { SketchPicker } from 'react-color';
import FontPicker from 'font-picker-react';
import PropTypes from 'prop-types';
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
  // const { statesParams } = useContext(ParamsContext);

  const [activeFontFamily, setActiveFontFamily] = useState(
    states.activeFontFamily
  );
  const [backgroundColor, setBackgroundColor] = useState(
    states.backgroundColor
  );
  const [hashtagColor, setHashtagColor] = useState(states.hashtagColor);
  const [mentionColor, setMentionColor] = useState(states.mentionColor);
  const [txtColor, setTxtColor] = useState(states.setTxtColor);
  const [jsonObj, setJsonObj] = useState({});

  const colorJson = {
    background: backgroundColor,
    hashtag: hashtagColor,
    mention: mentionColor,
    text: txtColor,
    font_family: activeFontFamily,
  };
  const stringify = (colors) => {
    return JSON.stringify(colors);
  };

  const submitColor = () => {
    const stringColors = stringify({
      background: backgroundColor,
      hashtag: hashtagColor,
      mention: mentionColor,
      text: txtColor,
      font_family: activeFontFamily,
    });
    setJsonObj(stringColors);
    console.log(stringColors);
  };

  useEffect(() => {
    sessionStorage.setItem('font_family', activeFontFamily);
    sessionStorage.setItem('background', backgroundColor);
    sessionStorage.setItem('hashtag', hashtagColor);
    sessionStorage.setItem('mention', mentionColor);
    sessionStorage.setItem('text', txtColor);
  }, [activeFontFamily, backgroundColor, hashtagColor, mentionColor, txtColor]);

  const handleChangeBg = (color) => {
    states.function.setBackgroundColor(color);
    setBackgroundColor(color);
  };

  const handleChangeTxt = (color) => {
    states.function.setTxtColor(color);
    setTxtColor(color);
  };

  const handleChangeHashtag = (color) => {
    states.function.setHashtagColor(color);
    states.function.setMentionColor(color);
    setHashtagColor(color);
    setMentionColor(color);
  };

  // selectedFont = la saisie de l'utilisateur
  const handleChangeFontFamily = (selectedFont) => {
    // ici on met a jour le state local de la font (state appartenant a ce composant)
    setActiveFontFamily(selectedFont);
    states.function.setActiveFontFamily(selectedFont);
    sessionStorage.setItem('font_family', selectedFont);
  };

  const restoreFontFamily = () => {
    setActiveFontFamily('Arial');
    sessionStorage.setItem('font_family', 'Arial');
  };

  const restoreTxt = () => {
    states.function.setTxtColor();
  };

  const restoreHashtagAndMention = () => {
    states.function.setHashtagColor();
    states.function.setMentionColor();
  };

  const restoreBackground = () => {
    const defaultBG = states.unmutabledColors.backgroundColor;
    setBackgroundColor(defaultBG);
    states.function.setBackgroundColor(defaultBG);
    console.log('restore', backgroundColor);
    submitColor();
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
                  color={backgroundColor}
                  onChange={(color) => handleChangeBg(color.hex)}
                  className="sketch-picker"
                />
                <BtnCancel handleClick={() => restoreBackground()} />
                <BtnSubmit handleClick={() => submitColor()} />
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
                <BtnCancel handleClick={() => restoreTxt()} />
                <BtnSubmit handleClick={() => submitColor()} />
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
                <BtnCancel handleClick={() => restoreHashtagAndMention()} />
                <BtnSubmit handleClick={() => submitColor()} />
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
                <BtnCancel handleClick={() => restoreFontFamily()} />
                <BtnSubmit handleClick={() => submitColor()} />
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
        {/*  ************** SLIDE FILTER + TRI par ordre ASC ou DESC  ************** */}
        <div className="sidebar-category">
          {/* <span>Tri et nombre de posts</span> */}
          <Accordion allowZeroExpanded>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <span>Tri et nombre de posts</span>
                </AccordionItemButton>
              </AccordionItemHeading>
              <Tri />
            </AccordionItem>
          </Accordion>
        </div>
        {/* ********************************************* */}
      </SidebarWrapper>
    </SidebarStyled>
  );
};

export default Sidebar;

Sidebar.propTypes = {
  show: PropTypes.bool.isRequired,
  setIsOpened: PropTypes.func.isRequired,
};
