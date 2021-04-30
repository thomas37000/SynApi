/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Sidebar from 'react-sidebar';
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
import BtnCancel from '../Buttons/ButtonCancel';
import BtnSubmit from '../Buttons/ButtonSubmit';
import BtnClose from '../Buttons/ButtonClose';
import BtnOpen from '../Buttons/BtnOpen';
import Tri from './Tri';
import 'react-accessible-accordion/dist/fancy-example.css';
import 'font-awesome/css/font-awesome.min.css';
import './Sidebar.css';

const SidebarTool = () => {
  const defaultColors = {
    txt: sessionStorage.getItem('txtColor') || '#fff',
    black: sessionStorage.getItem('mentionColor') || '#000',
    im: sessionStorage.getItem('mentionColor') || '#e1306c',
    fk: sessionStorage.getItem('mentionColor') || '#4267b2',
    fkBackgroundNoImg: sessionStorage.getItem('bgColor') || '#4267b2',
    fkRegexColor: sessionStorage.getItem('hashtagColor') || '#4267b2',
    tr: sessionStorage.getItem('mentionColor') || '#1da1f2',
    trBackgroundNoImg: sessionStorage.getItem('bgColor') || '#1da1f2',
    trRegexColor: sessionStorage.getItem('hashtagColor') || '#1da1f2',
  };
  const defaultTypo = {
    typo: sessionStorage.getItem('activeFontFamily') || 'Arial',
  };

  const defaultPost = {
    newPost: sessionStorage.getItem('newPost') || '10',
  };

  const [hashtagColor, setHashtagColor] = useState(
    defaultColors.fkRegexColor ||
      defaultColors.imRegexColor ||
      defaultColors.trRegexColor
  );
  const [bgColor, setBgColor] = useState(defaultColors.trBackgroundNoImg);
  const [txtColor, setTxtColor] = useState(defaultColors.txt);
  const [mentionColor, setMentionColor] = useState(defaultColors.black);
  const [activeFontFamily, setActiveFontFamily] = useState(defaultTypo.typo);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [newPost, setNewPost] = useState(defaultPost.newPost);
  const [jsonObj, setJsonObj] = useState({});

  const onSetSidebarOpen = (open) => {
    setSidebarOpen({ sidebarOpen: open });
    setSidebarOpen(!sidebarOpen);
  };

  // restore color background / text / # or @ by default
  const restoreHashtagAndMention = () => {
    setHashtagColor(!hashtagColor);
    setMentionColor(!mentionColor);
  };

  const restoreBg = () => {
    setBgColor(!bgColor);
  };

  const restoreTxt = () => {
    setTxtColor(!txtColor);
  };

  const restoreFontFamily = () => {
    setActiveFontFamily(!activeFontFamily);
  };

  const changePost = (e) => {
    setNewPost(!newPost);
    setNewPost({ value: e.target.value });
  };

  const submitColor = () => {
    const jsonColor = JSON.stringify(jsonObj);
    console.log('JSON sidebar', jsonColor);
  };

  useEffect(() => {
    sessionStorage.setItem('bgColor', bgColor);
    sessionStorage.setItem('mentionColor', mentionColor);
    sessionStorage.setItem('hashtagColor', hashtagColor);
    sessionStorage.setItem('txtColor', txtColor);
    sessionStorage.setItem('fontFamily', activeFontFamily);
    sessionStorage.setItem('newPost', newPost);
    console.log('json Sidebar', sessionStorage);
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

  return (
    <Sidebar
      sidebar={
        <div className="sidebarContainer">
          <BtnClose handleClick={onSetSidebarOpen} />

          <div className="sidebarCategory">
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
                    onChange={(color) => setBgColor(color.hex)}
                    className="sketchPicker"
                  />
                  <BtnCancel handleClick={restoreBg} />
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
                    onChange={(color) => setTxtColor(color.hex)}
                    className="sketchPicker"
                  />
                  <BtnCancel handleClick={restoreTxt} />
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
                    onChange={(color) =>
                      setHashtagColor(color.hex) || setMentionColor(color.hex)
                    }
                    className="sketchPicker"
                  />
                  <BtnCancel handleClick={restoreHashtagAndMention} />
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
                      setActiveFontFamily(nextFont.family)
                    }
                    className="typo"
                  />
                  <BtnCancel handleClick={restoreFontFamily} />
                  <BtnSubmit handleClick={submitColor} />
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="sidebarCategory">
            <span>Tri et nombre de posts</span>
            <Accordion allowZeroExpanded>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span>Tri et nombre de posts</span>
                  </AccordionItemButton>
                </AccordionItemHeading>
                {/* SLIDE FILTER ******************************* */}
                <Tri handleChnage={changePost} />
                {/* ********************************************* */}
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      }
      open={sidebarOpen}
      onSetOpen={onSetSidebarOpen}
      styles={{ sidebar: { background: 'white', width: 350 } }}
      onClick={() => onSetSidebarOpen(true)}
    >
      <button
        className="btnSidebar"
        type="button"
        onClick={() => onSetSidebarOpen(true)}
      >
        <i className="fa fa-cog fa-2x" />
      </button>
      {/* <BtnOpen handleChange={onSetSidebarOpen} /> */}
    </Sidebar>
  );
};

Sidebar.propTypes = {
  postUpdate: PropTypes.func.isRequired,
};

export default SidebarTool;
