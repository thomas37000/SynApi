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
import styled from 'styled-components';
import { ColorContext } from '../Context/ColorContext';
import { ParamsContext } from '../Context/ParamsContext';
import BtnCancel from '../Buttons/ButtonCancel';
import BtnSubmit from '../Buttons/ButtonSubmit';
import Tri from './Tri';
import 'react-accessible-accordion/dist/fancy-example.css';
import 'font-awesome/css/font-awesome.min.css';
import './Sidebar.css';

const SidebarStyled = styled.div`
  position: fixed;
  z-index: 555;
  top: 0;
  left: 0;
  background-color: #f7f7f7;
  padding: 1rem;
  color: var(--dark);
  max-width: 340px;
  height: 100%;
  transform: translateX(${(props) => (props.show ? '0' : '-100%')});
  transition: all 0.3s ease-in-out;
`;

const SidebarWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const CloseIcon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  padding: 10px 35px 16px 0px;

  & span,
  & span:before,
  & span:after {
    cursor: pointer;
    border-radius: 1px;
    height: 3px;
    width: 30px;
    background: var(--dark);
    position: absolute;
    display: block;
    content: '';
  }

  & span {
    background-color: transparent;
  }

  & span:before {
    top: 0;
    transform: rotate(45deg);
  }

  & span:after {
    top: 0;
    transform: rotate(-45deg);
  }
`;
const Sidebar = ({ show, setIsOpened }) => {
  const { states } = useContext(ColorContext, ParamsContext);

  const [activeFontFamily, setActiveFontFamily] = useState();
  const [bgColor] = useState();
  const [hashtagColor] = useState();
  const [mentionColor] = useState();
  const [newPost, setNewPost] = useState();
  // const [sidebarOpen, setSidebarOpen] = useState(false);
  const [txtColor] = useState();
  const [jsonObj, setJsonObj] = useState({});

  const restoreFontFamily = () => {
    setActiveFontFamily(!activeFontFamily);
  };

  const changePost = (e) => {
    setNewPost(newPost);
    // setNewPost({ value: e.target.value });
  };

  const submitColor = () => {
    const jsonColor = JSON.stringify(jsonObj);
    // console.log('JSON sidebar', jsonColor);
  };

  useEffect(() => {
    sessionStorage.setItem('bgColor', bgColor);
    sessionStorage.setItem('mentionColor', mentionColor);
    sessionStorage.setItem('hashtagColor', hashtagColor);
    sessionStorage.setItem('txtColor', txtColor);
    sessionStorage.setItem('fontFamily', activeFontFamily);
    sessionStorage.setItem('newPost', newPost);
    setJsonObj({
      bgColor,
      mentionColor,
      hashtagColor,
      txtColor,
      activeFontFamily,
      newPost,
    });
  }, [
    activeFontFamily,
    bgColor,
    mentionColor,
    hashtagColor,
    txtColor,
    newPost,
  ]);

  const handleChangeBg = (color) => {
    states.function.setBgColor(color);
    sessionStorage.setItem('bgColor', color);
  };

  const handleChangeTxt = (color) => {
    states.function.setTxtColor(color);
    sessionStorage.setItem('txtColor', color);
  };

  const handleChangeHashtag = (color) => {
    states.function.setHashtagColor(color);
    states.function.setMentionColor(color);
    sessionStorage.setItem('hasthagColor', color);
    sessionStorage.setItem('mentionColor', color);
  };

  const handleChangeFontFamily = () => {
    states.function.setActiveFontFamily(activeFontFamily);
    sessionStorage.setItem('activeFontFamily', activeFontFamily);
  };

  const handleChangePost = () => {
    // states.function.setNewPost(newPost);
    states.function.setNewPost(newPost);
    sessionStorage.setItem('newPost', newPost);
  };

  console.log('handleChangePost', newPost);
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
        <div className="sidebar-category">
          <span>Tri et nombre de posts</span>
          <Accordion allowZeroExpanded>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <span>Tri et nombre de posts</span>
                </AccordionItemButton>
              </AccordionItemHeading>
              {/* SLIDE FILTER ******************************* */}
              <Tri handleChange={handleChangePost} />

              {/* ********************************************* */}
            </AccordionItem>
          </Accordion>
        </div>
      </SidebarWrapper>
    </SidebarStyled>
  );
};

export default Sidebar;
